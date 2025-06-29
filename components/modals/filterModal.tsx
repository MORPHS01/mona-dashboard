"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Icon from "@/public/svgs/dynamicSvgs";
import React from "react";
import Button from "../shared/button";
import { filters } from "@/data/filterModalData";
import FilterBlock from "../filterBlock";

export default function FilterModal() {
  const {
    filterMenuOpen,
    setFilterMenuOpen,
    selectedFilters,
    setSelectedFilters,
  } = useStateContext();

  // Handler to update a filter's value
  const handleFilterChange = (header: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [header]: value,
    }));
  };

  const nonAllCount = Object.keys(selectedFilters).filter(
    (header) => selectedFilters[header] && selectedFilters[header] !== "all"
  ).length;

  return (
    <main
      className={`fixed z-[1000] inset-0 w-screen h-screen transition-all duration-350 ease-in-out ${
        filterMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="fixed z-[1000] left-0 top-0 cursor-pointer bg-modalBackground backdrop-blur-xs w-full h-full"
        onClick={() => setFilterMenuOpen(false)}
      />

      <section className="fixed overflow-auto top-[10px] max-sm:top-0 right-[10px] max-sm:right-0 bottom-[10px] max-sm:bottom-0 w-[45%] max-md:w-[70%] max-sm:w-[90%] max-w-[500px] bg-white z-[10000] rounded-[10px] px-[24px] max-sm:px-[20px] py-[32px] max-sm:py-[24px]">
        <article className="flex justify-between items-center py-[14px] mb-[20px]">
          <p className="text-lg font-generalSans font-semibold">
            Filter Transactions
          </p>
          <Icon
            name="close"
            color="#090901"
            onClick={() => setFilterMenuOpen(false)}
            className="cursor-pointer hover:opacity-70 transition"
          />
        </article>

        <article className="flex flex-col justify-between">
          {filters.map((filter, i) => (
            <FilterBlock
              key={i}
              header={filter.header}
              filterList={filter.filterList}
              value={selectedFilters[filter.header]}
              onChange={(value) => handleFilterChange(filter.header, value)}
            />
          ))}
          <aside className="flex gap-[10px]">
            <Button
              variant="outline"
              border="#131503"
              text="#131503"
              className="flex-4/9"
              onClick={() => {
                // Reset all filters to empty string
                const resetFilters: { [key: string]: string } = {};
                filters.forEach((filter) => {
                  resetFilters[filter.header] = "all";
                });
                setSelectedFilters(resetFilters);
              }}
            >
              Reset all
            </Button>
            <Button
              className="flex-5/9"
              onClick={() => setFilterMenuOpen(false)}
            >
              Apply Filters ({nonAllCount})
            </Button>
          </aside>
        </article>
      </section>
    </main>
  );
}
