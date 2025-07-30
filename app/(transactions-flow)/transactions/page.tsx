"use client";
import Button from "@/components/shared/button";
import { useStateContext } from "@/contexts/ContextProvider";
import { transactions, transactionsHeader } from "@/data/transactionsData";
import Icon from "@/public/svgs/dynamicSvgs";
import React, { useState } from "react";
import Image from "next/image";
import RetryBlock from "@/components/retryBlock";
import Link from "next/link";
import { Menu } from "@/components/navigation/sidebarmenulayout";

export default function Transactions() {
  const {
    sideOpen,
    setSideOpen,
    setSideOpenMobile,
    sideOpenMobile,
    setFilterMenuOpen,
    selectedFilters,
    setSelectedFilters,
  } = useStateContext();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  type TransactionKey = "status" | "method" | "source";
  type Header = "Status" | "Method" | "Source" | "payment method";

  const headerMap: Record<Header, TransactionKey> = {
    Status: "status",
    Method: "method",
    Source: "source",
    "payment method": "method",
  };

  // Filter logic
  const filteredByFilters = transactions.filter((transaction) =>
    Object.entries(selectedFilters).every(([header, value]) => {
      if (!value || value === "all") return true;

      const key = headerMap[header as Header] || (header as TransactionKey);
      return (
        String(transaction[key as keyof typeof transaction] ?? "")
          .trim()
          .toLowerCase() === value.trim().toLowerCase()
      );
    })
  );

  // Search filter logic
  const filteredTransactions = filteredByFilters.filter(
    (transaction) =>
      transaction.transactionId.toLowerCase().includes(search.toLowerCase()) ||
      transaction.payer.toLowerCase().includes(search.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(search.toLowerCase()) ||
      transaction.status.toLowerCase().includes(search.toLowerCase()) ||
      transaction.method.toLowerCase().includes(search.toLowerCase()) ||
      transaction.source.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="w-full max-w-[2000px]">
      <section className="bg-white px-[24px] max-[40rem]:px-[18px] py-[16px] max-[40rem]:py-[12px] rounded-lg flex justify-between items-center mb-[24px]">
        <aside className="flex items-center gap-[15px]">
          <div
            className="hidden max-md:block"
            onClick={() => {
              if (window.innerWidth > 768) {
                setSideOpen(!sideOpen);
              } else {
                setSideOpenMobile(!sideOpenMobile);
              }
            }}
          >
            <Menu />
          </div>
          <p className="font-clashGrotesk font-semibold text-base max-sm:text-sm">
            Transactions
          </p>
        </aside>

        <Icon
          name="bell"
          className="p-[8px] max-sm:p-[6px] rounded-full bg-softOrange cursor-pointer hover:brightness-96 transition"
        />
      </section>

      {Object.entries(selectedFilters).filter(
        ([, value]) => value && value !== "all"
      ).length > 0 && (
        <section className="flex justify-between flex-wrap items-center gap-[4px] mb-[24px]">
          <aside className="flex items-center flex-wrap gap-[4px]">
            <p className="font-generalSans font-medium text-sm whitespace-nowrap">
              Filtered by :
            </p>
            <article className="flex gap-2 flex-wrap">
              {Object.entries(selectedFilters)
                .filter(([, value]) => value && value !== "all")
                .map(([header, value]) => (
                  <span
                    key={header}
                    className="bg-white text-gray-300 p-[8px] rounded-lg border border-divider text-xs font-medium flex items-center gap-1"
                  >
                    {header.toLocaleUpperCase()}: {value}{" "}
                    <Icon
                      name="smallClose"
                      className="cursor-pointer ml-[3px]"
                      onClick={() => {
                        setSelectedFilters((prev) => ({
                          ...prev,
                          [header]: "all",
                        }));
                      }}
                    />
                  </span>
                ))}
            </article>
          </aside>
          <p
            onClick={() => {
              const resetFilters: { [key: string]: string } = {};
              Object.keys(selectedFilters).forEach((key) => {
                resetFilters[key] = "all";
              });
              setSelectedFilters(resetFilters);
            }}
            className="text-[#D85F3D] font-semibold text-xs hover:brightness-120 cursor-pointer whitespace-nowrap"
          >
            Reset all
          </p>
        </section>
      )}

      <section className="bg-white p-[24px] max-[40rem]:p-[15px] rounded-lg overflow-auto">
        <aside className="flex justify-between items-center max-lg:flex-wrap max-lg:gap-[10px] max-md:flex-col mb-[24px]">
          <div className="bg-background w-[33%] min-w-[340px] max-[40rem]:min-w-[250px] max-md:w-full relative group">
            <Icon
              name="search"
              className="absolute left-[16px] top-1/2 -translate-y-1/2 stroke-[#C6C7C3] group-focus-within:stroke-[#000000]"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a transaction "
              className="w-full h-full rounded-lg pl-[46px] pr-[16px] py-[12px] placeholder-gray-100 text-sm font-generalSans"
            />
          </div>
          <div className="flex items-center gap-[8px] max-md:w-full">
            <Button
              variant="outline"
              border="#090901"
              text="#090901"
              onClick={() => setFilterMenuOpen(true)}
              className="flex items-center gap-[10px] max-md:flex-1 max-md:justify-center"
            >
              <Icon name="filter" />
              Filter
            </Button>
            <Button className="flex items-center gap-[12px] max-md:flex-1 max-md:justify-center">
              Export
              <Icon name="download" color="white" />
            </Button>
          </div>
        </aside>

        <aside className="rounded-sm border border-divider overflow-auto">
          {paginatedTransactions.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  {transactionsHeader.map((header, i) => (
                    <th
                      key={i}
                      className="p-[16px] max-[40rem]:p-[10px] text-left text-foreground font-medium font-generalSans text-sm whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction, i) => (
                  <tr
                    key={i}
                    className="border-t border-divider hover:bg-background/80 whitespace-nowrap text-gray-300 text-sm font-normal font-generalSans"
                  >
                    <td className="p-[16px] max-[40rem]:p-[12px] text-foreground">
                      {transaction.transactionId}
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      <div className="flex items-center gap-[8px]">
                        {transaction.payer === "Jerry Wilson" ? (
                          <div className="relative w-[32px] h-[32px] max-[40rem]:w-[24px] max-[40rem]:h-[24px]">
                            <Image
                              src="/images/user-image.jpg"
                              alt="user-image-with-mona-emblem"
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <Image
                              src="/svgs/mona-emblem.svg"
                              alt="mona-emblem"
                              width={11}
                              height={11}
                              className="rounded-full absolute bottom-0 right-0"
                            />
                          </div>
                        ) : (
                          <div className="w-[32px] h-[32px] max-[40rem]:w-[24px] max-[40rem]:h-[24px] bg-monaGreen text-white flex justify-center items-center rounded-full">
                            IN
                          </div>
                        )}
                        <p>{transaction.payer}</p>
                      </div>
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      {transaction.amount}
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      <div className="flex gap-[8px] items-center">
                        <span
                          className={`p-[6px] rounded-lg text-[10px] leading-[16px] font-medium ${
                            transaction.status === "Successful"
                              ? "bg-softGreen text-deepGreen"
                              : transaction.status === "Pending"
                              ? "bg-softYellow text-monaYellow"
                              : "bg-softRed text-monaRed"
                          }`}
                        >
                          {transaction.status}
                        </span>
                        {transaction.retry && <RetryBlock />}
                      </div>
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      <div className="p-[8px] rounded-md text-[10px] leading-[16px] font-medium border border-divider text-center max-w-fit">
                        {transaction.method}
                      </div>
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      <Link
                        href={{
                          pathname: `/transactions/${
                            transaction.source === "COLLECTIONS"
                              ? "collections"
                              : "checkout"
                          }`,
                          query: {
                            status: transaction.status,
                            payer: transaction.payer,
                            transactionId: transaction.transactionId,
                          },
                        }}
                        className="group"
                      >
                        <div className="p-[8px] rounded-md text-[10px] cursor-pointer leading-[16px] font-medium border border-divider flex items-center gap-[4px] max-w-fit group-hover:text-foreground group-hover:border-gray-300 group-hover:bg-background">
                          <Icon
                            name={
                              transaction.source === "CHECKOUT"
                                ? "checkout"
                                : "collections"
                            }
                            className="group-hover:brightness-120"
                          />
                          {transaction.source}
                          {transaction.source === "COLLECTIONS" && (
                            <Icon
                              name="link"
                              className="stroke-[#6A6C60] group-hover:stroke-foreground"
                            />
                          )}
                        </div>
                      </Link>
                    </td>
                    <td className="p-[16px] max-[40rem]:p-[10px]">
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <section className="h-[450px] w-full flex justify-center items-center">
              <article className="text-center flex flex-col w-[264px] items-center gap-[16px] max-[40rem]:p-[10px]">
                <Image
                  src="/svgs/empty-states.svg"
                  alt="empty-state"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="font-clashGrotesk font-semibold text-lg">
                    No results found
                  </p>
                  <p className="font-generalSans font-normal text-base text-gray-300">
                    No transactions match these filters. You can tweak them and
                    try again.
                  </p>
                </div>
                <Button
                  onClick={() => setFilterMenuOpen(true)}
                  className="w-[86%] mx-auto"
                >
                  Try Again
                </Button>
              </article>
            </section>
          )}
        </aside>

        {/* Pagination controls */}
        {paginatedTransactions.length > 0 && (
          <aside className="flex max-lg:flex-wrap max-md:flex-col gap-2 mt-[12px] p-[16px] max-[40rem]:p-[10px] justify-between items-center text-gray-300 text-sm font-normal font-generalSans">
            <span>
              Page {currentPage} of {totalPages}
            </span>

            <div className="flex items-center gap-[4px]">
              <Icon
                name="doubleLeftArrow"
                className="cursor-pointer"
                color={currentPage === 1 ? "#c6c7c3" : "#131503"}
                onClick={() => setCurrentPage((p) => Math.max(p - 2, 1))}
              />

              <Icon
                name="leftArrow"
                className="cursor-pointer"
                color={currentPage === 1 ? "#c6c7c3" : "#131503"}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              />

              <div className="flex gap-[4px] items-center mx-[6px] font-medium text-sm">
                <p
                  onClick={() =>
                    currentPage - 2 < 1
                      ? setCurrentPage(currentPage)
                      : setCurrentPage(currentPage - 2)
                  }
                  className="text-gray-100 cursor-pointer border border-gray-100 rounded-lg w-[32px] h-[32px] flex justify-center items-center"
                >
                  {currentPage - 2 < 1 ? "..." : currentPage - 2}
                </p>
                <p
                  onClick={() =>
                    currentPage - 1 < 1
                      ? setCurrentPage(currentPage)
                      : setCurrentPage(currentPage - 1)
                  }
                  className="text-gray-100 cursor-pointer border border-gray-100 rounded-lg w-[32px] h-[32px] flex justify-center items-center"
                >
                  {currentPage - 1 < 1 ? "..." : currentPage - 1}
                </p>
                <p className="text-foreground cursor-pointer border border-foreground rounded-lg w-[32px] h-[32px] flex justify-center items-center">
                  {currentPage}
                </p>
                <p
                  onClick={() =>
                    currentPage + 1 > totalPages
                      ? setCurrentPage(currentPage)
                      : setCurrentPage(currentPage + 1)
                  }
                  className="text-gray-100 cursor-pointer border border-gray-100 rounded-lg w-[32px] h-[32px] flex justify-center items-center"
                >
                  {currentPage + 1 > totalPages ? "..." : currentPage + 1}
                </p>
                <p
                  onClick={() =>
                    currentPage + 1 > totalPages
                      ? setCurrentPage(currentPage)
                      : setCurrentPage(currentPage + 2)
                  }
                  className="text-gray-100 cursor-pointer border border-gray-100 rounded-lg w-[32px] h-[32px] flex justify-center items-center"
                >
                  {currentPage + 2 > totalPages ? "..." : currentPage + 2}
                </p>
              </div>

              <Icon
                name="leftArrow"
                className="rotate-180 cursor-pointer"
                color={currentPage === totalPages ? "#c6c7c3" : "#131503"}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
              />

              <Icon
                name="doubleLeftArrow"
                className="rotate-180 cursor-pointer"
                color={currentPage === totalPages ? "#c6c7c3" : "#131503"}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 2, totalPages))
                }
              />
            </div>

            <div className="flex items-center gap-[4px]">
              <p>items per page</p>
              <input
                type="number"
                min={1}
                value={itemsPerPage}
                onChange={(e) => {
                  const value = Math.max(1, Number(e.target.value));
                  setItemsPerPage(value);
                }}
                className="bg-background p-[10px] rounded-md w-[50px] text-foreground"
              />
            </div>
          </aside>
        )}
      </section>
    </main>
  );
}
