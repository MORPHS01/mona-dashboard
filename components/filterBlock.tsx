"use client";
import { useEffect, useState } from "react";

type FilterBlockProps = {
  header: string;
  filterList: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterBlock({
  header,
  filterList,
  value,
  onChange,
}: FilterBlockProps) {
  const [filterItem, setFilterItem] = useState(value || "all");

  useEffect(() => {
    setFilterItem(value || "all");
  }, [value]);

  const handleFilterChange = (item: string) => {
    setFilterItem(item);
    onChange(item);
  };

  return (
    <main className="font-generalSans mb-[20px]">
      <section className="flex justify-between items-center mb-[8px]">
        <p className="text-[#3D3F30] font-medium text-sm capitalize">
          {header}
        </p>
        <p
          onClick={() => handleFilterChange("all")}
          className="text-[#D85F3D] font-semibold text-xs hover:brightness-120 cursor-pointer"
        >
          Reset
        </p>
      </section>
      <section className="flex flex-wrap gap-[8px] text-xs mb-[24px]">
        {filterList.map((item, i) => (
          <article
            key={i}
            onClick={() => handleFilterChange(item)}
            className={`rounded-sm px-[12px] py-[9px] cursor-pointer transition border-[2px] capitalize ${
              item === filterItem
                ? "border-monaOrange bg-softOrange text-monaOrange"
                : "border-transparent bg-background text-gray-300"
            }`}
          >
            {item}
          </article>
        ))}
      </section>
      <hr className="border border-divider" />
    </main>
  );
}
