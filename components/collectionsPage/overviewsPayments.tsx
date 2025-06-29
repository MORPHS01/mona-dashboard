"use client";
import Icon from "@/public/svgs/dynamicSvgs";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../shared/button";
import { collections, collectionsHeader } from "@/data/collectionsData";
import Link from "next/link";
import { useStateContext } from "@/contexts/ContextProvider";

export function Overviews() {
  return (
    <main className="bg-white p-[24px] rounded-lg flex flex-col mb-[24px]">
      <section className="flex justify-between items-center mb-[16px]">
        <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base">
          Overview
        </p>

        <div className="flex items-center border border-divider rounded-lg p-[9px] text-gray-300 font-medium font-generalSans text-xs">
          <div className="flex gap-[2px] items-center border-r border-r-divider px-[6px]">
            <Icon name="calendar" />
            <p>As at</p>
          </div>
          <p className="px-[6px]">Aug 2025</p>
        </div>
      </section>

      <section className="border-t border-b border-divider py-[24px] flex justify-around gap-[10px] h-full items-center overflow-x-auto max-sm:flex-col max-sm:items-start max-sm:gap-[20px]">
        <aside className="font-generalSans">
          <p className="uppercase text-gray-300 text-[10px] font-medium">
            Completed Payments
          </p>
          <p className="mb-[8px] font-clashGrotesk font-bold text-xl">8</p>
          <p className="text-gray-300 font-semibold text-[10px]">
            successful out of 12
          </p>
        </aside>
        <hr className="border border-divider w-[1px] h-[70px] max-sm:hidden" />

        <aside className="font-generalSans">
          <p className="uppercase text-gray-300 text-[10px] font-medium">
            Total Collected
          </p>
          <p className="mb-[8px] font-clashGrotesk font-bold text-xl">₦6,000</p>
          <p className="text-gray-300 font-semibold text-[10px]">
            last payment - 06 Aug 2025
          </p>
        </aside>
        <hr className="border border-divider w-[1px] h-[70px] max-sm:hidden" />

        <aside className="font-generalSans">
          <p className="uppercase text-gray-300 text-[10px] font-medium">
            Estimated future payment
          </p>
          <p className="mb-[8px] font-clashGrotesk font-bold text-xl">
            ₦14,000
          </p>
          <p className="text-gray-300 font-semibold text-[10px]">
            next payment - 06 Sept 2025
          </p>
        </aside>
      </section>
    </main>
  );
}

export function Payments({ payer }: { payer: string }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const { setFilterMenuOpen } = useStateContext();

  // Search filter logic
  const filteredCollections = collections.filter(
    (transaction) =>
      transaction.transactionId.toLowerCase().includes(search.toLowerCase()) ||
      transaction.payments.toLowerCase().includes(search.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(search.toLowerCase()) ||
      transaction.status.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCollections.length / itemsPerPage);
  const paginatedCollections = filteredCollections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <main className="bg-white p-[24px] rounded-lg w-full max-w-[1000px]">
      <aside className="flex justify-between items-center max-xl:flex-wrap max-lg:gap-[10px] max-md:flex-col max-md:items-start mb-[24px]">
        <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base">
          Payments
        </p>
        <div className="flex items-center gap-[8px] max-md:w-full">
          <div className="bg-background w-[33%] min-w-[250px] max-md:w-full relative group">
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
        </div>
      </aside>

      <aside className="rounded-sm border border-divider overflow-auto">
        {paginatedCollections.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                {collectionsHeader.map((header, i) => (
                  <th
                    key={i}
                    className="p-[16px] text-left text-foreground font-medium font-generalSans text-sm whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedCollections.map((collection, i) => (
                <tr
                  key={i}
                  className="border-t border-divider hover:bg-background/80 whitespace-nowrap text-sm font-normal font-generalSans"
                >
                  <td className="p-[16px] text-foreground">
                    <CollectionLink
                      payer={payer}
                      transactionId={collection.transactionId}
                      className="flex flex-col items-start"
                    >
                      <p className="font-clashGrotesk text-base font-semibold">
                        06
                      </p>
                      <p className="text-[#723220] font-medium text-[10px] uppercase font-generalSans">
                        {collection.date}
                      </p>
                    </CollectionLink>
                  </td>
                  <td className="p-[16px]">
                    <CollectionLink
                      payer={payer}
                      transactionId={collection.transactionId}
                      className="flex flex-col items-start"
                    >
                      <p className="font-generalSans text-sm font-medium">
                        Petty Loan
                      </p>
                      <p className="text-gray-200 font-normal text-[10px] font-generalSans">
                        {collection.payments} payment
                      </p>
                    </CollectionLink>
                  </td>
                  <td className="p-[16px]">
                    <CollectionLink
                      payer={payer}
                      transactionId={collection.transactionId}
                      className="text-sm font-normal flex items-center gap-[2px]"
                    >
                      {collection.transactionId}
                      <Icon name="copy" className="cursor-pointer" />
                    </CollectionLink>
                  </td>

                  <td className="p-[16px]">
                    <span
                      className={`p-[6px] rounded-lg text-[10px] leading-[16px] font-medium ${
                        collection.status === "Successful"
                          ? "bg-softGreen text-deepGreen"
                          : collection.status === "Scheduled"
                          ? "bg-softYellow text-monaYellow"
                          : "bg-softRed text-monaRed"
                      }`}
                    >
                      {collection.status}
                    </span>
                  </td>
                  <td className="p-[16px]">
                    <CollectionLink
                      payer={payer}
                      transactionId={collection.transactionId}
                      className="flex flex-col gap-[2px] items-start"
                    >
                      <p className="font-generalSans text-sm font-medium">
                        {collection.amount}
                      </p>
                      <div className="text-gray-200 font-normal text-[10px] font-generalSans flex gap-[2px] items-center">
                        from
                        {collection.from === "sterling" ? (
                          <Image
                            src="/images/sterling-logo.png"
                            alt="sterling-logo"
                            width={14}
                            height={14}
                          />
                        ) : (
                          <Icon name="bank" />
                        )}
                      </div>
                    </CollectionLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <section className="h-[450px] w-full flex justify-center items-center">
            <article className="text-center flex flex-col w-[264px] items-center gap-[16px]">
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
              <Button className="w-[86%] mx-auto">Try Again</Button>
            </article>
          </section>
        )}
      </aside>

      {/* Pagination controls */}
      {paginatedCollections.length > 0 && (
        <aside className="flex max-xl:flex-wrap max-md:flex-col gap-2 mt-[12px] p-[16px] justify-between items-center text-gray-300 text-sm font-normal font-generalSans">
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
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            />

            <Icon
              name="doubleLeftArrow"
              className="rotate-180 cursor-pointer"
              color={currentPage === totalPages ? "#c6c7c3" : "#131503"}
              onClick={() => setCurrentPage((p) => Math.min(p + 2, totalPages))}
            />
          </div>

          <div className="flex items-center gap-[4px]">
            <p>items per page</p>
            <input
              type="number"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="bg-background p-[10px] rounded-md w-[50px] text-foreground"
            />
          </div>
        </aside>
      )}
    </main>
  );
}
// collection.transactionId

type CollectionLinkProps = {
  children: React.ReactNode;
  transactionId: string;
  className: string;
  payer: string;
};

function CollectionLink({
  children,
  transactionId,
  className,
  payer,
}: CollectionLinkProps) {
  return (
    <Link
      href={{
        pathname: "/transactions/collections/details",
        query: {
          transactionId: transactionId,
          payer: payer,
        },
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
