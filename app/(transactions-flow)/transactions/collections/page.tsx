"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Icon from "@/public/svgs/dynamicSvgs";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import MoreActions from "@/components/collectionsPage/moreActions";
import {
  Overviews,
  Payments,
} from "@/components/collectionsPage/overviewsPayments";
import Loading from "@/components/loading";
import React, { Suspense } from "react";
import { Menu } from "@/components/navigation/sidebarmenulayout";

export default function Collections() {
  return (
    <Suspense fallback={<Loading />}>
      <CollectionsPage />
    </Suspense>
  );
}

function CollectionsPage() {
  const searchParams = useSearchParams();
  const payer = searchParams.get("payer");
  const transactionId = searchParams.get("transactionId");
  const collectionId =
    transactionId === "MNA -TRC-422871" ? "MNA -COL-422871" : "MNA -COL-235701";

  const { sideOpen, setSideOpen, setSideOpenMobile, sideOpenMobile } =
    useStateContext();

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="bg-white px-[24px] max-[40rem]:px-[18px] py-[16px] max-[40rem]:py-[12px] rounded-lg flex gap-[20px] mb-[24px]">
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
          </aside>
          <aside className="flex flex-col">
            <Link
              href="/transactions"
              className="flex items-center gap-[2px] text-gray-300 font-medium font-generalSans text-[10px] hover:brightness-110 cursor-pointer transition"
            >
              <Icon name="smallLeftArrow" />
              {transactionId}
            </Link>
            <p className="font-clashGrotesk font-semibold text-base max-sm:text-sm">
              {collectionId}
            </p>
          </aside>
        </section>

        <section className="flex items-start gap-[24px] max-lg:gap-[18px] max-lg:flex-wrap max-md:flex-col">
          <article className="flex-93/274 max-md:w-full">
            <div className="bg-white p-[24px] max-[40rem]:p-[18px] rounded-lg flex flex-col mb-[24px]">
              <aside className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base">
                    Petty Loan
                  </p>
                  <p className="font-generalSans text-xs text-gray-300">
                    Product name : De-Loan app
                  </p>
                </div>

                <div className="flex items-center gap-[2px] rounded-lg px-[6px] py-[4px] bg-softGreen">
                  <Icon name="check" />
                  <p className="text-[10px] font-generalSans font-medium text-deepGreen">
                    Ongoing
                  </p>
                </div>
              </aside>
              <hr className="border border-divider my-[24px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Payer</p>
                <div className="flex items-center gap-[4px]">
                  {payer === "Jerry Wilson" ? (
                    <div className="relative w-[24px] h-[24px]">
                      <Image
                        src="/images/user-image.jpg"
                        alt="user-image-with-mona-emblem"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <Image
                        src="/svgs/mona-emblem.svg"
                        alt="mona-emblem"
                        width={8}
                        height={8}
                        className="rounded-full absolute bottom-0 right-0"
                      />
                    </div>
                  ) : (
                    <div className="w-[24px] h-[24px] bg-monaGreen text-white text-xs flex justify-center items-center rounded-full">
                      IN
                    </div>
                  )}
                  <p className="text-sm font-medium">{payer}</p>
                </div>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Frequency</p>
                <p className="text-sm font-medium">Monthly</p>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Collection ID</p>
                <div className="text-sm font-medium flex items-center gap-[2px]">
                  {collectionId}
                  <Icon name="copy" className="cursor-pointer" />
                </div>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Next Payment Date</p>
                <p className="text-sm font-medium">Sep 6, 2025</p>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Initiation Date</p>
                <p className="text-sm font-medium">Jan 6, 2025 </p>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />

              <aside className="flex justify-between items-center font-generalSans">
                <p className="text-sm text-gray-300">Linked Bank</p>
                <p className="text-sm font-medium flex items-center gap-[2px]">
                  <Image
                    src="/images/sterling-emblem.png"
                    alt="sterling-bank"
                    width={24}
                    height={24}
                    className="rounded-full p-[1px] border-[2px] border-[#D9212833]"
                  />
                  -*****1031
                </p>
              </aside>
              <hr className="border border-divider mt-[24px] mb-[16px]" />
            </div>

            <MoreActions />
          </article>

          <article className="flex-175/274 max-md:w-full overflow-auto">
            <Overviews />
            <Payments payer={payer || "null"} />
          </article>
        </section>
      </main>
    </Suspense>
  );
}
