"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Icon from "@/public/svgs/dynamicSvgs";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Details() {
  const searchParams = useSearchParams();
  const payer = searchParams.get("payer");
  const transactionId = searchParams.get("transactionId");

  const router = useRouter();

  const { setSideOpen, setSideOpenMobile, sideOpen, sideOpenMobile } =
    useStateContext();

  function getCollectionId(transactionId: string) {
    return transactionId.replace(/TRC|SCD/g, "COL");
  }

  const collectionId = getCollectionId(transactionId || "");

  return (
    <main>
      <section className="bg-white px-[24px] py-[16px] rounded-lg flex flex-col mb-[24px]">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-[2px] text-gray-300 font-medium font-generalSans text-[10px] hover:brightness-110 cursor-pointer transition"
        >
          <Icon name="smallLeftArrow" />
          Transactions
        </div>
        <p
          className="font-clashGrotesk font-semibold text-base max-sm:text-sm cursor-pointer hover:text-monaOrange transition"
          onClick={() => {
            if (window.innerWidth > 768) {
              setSideOpen(!sideOpen);
            } else {
              setSideOpenMobile(!sideOpenMobile);
            }
          }}
        >
          {transactionId}
        </p>
      </section>

      <section className="flex items-start gap-[24px] max-lg:gap-[18px] max-lg:flex-wrap max-md:flex-col">
        <article className="flex-311/548 max-md:w-full">
          <div className="bg-white p-[24px] rounded-lg flex flex-col mb-[24px]">
            <aside className="bg-background rounded-lg py-[12px] w-full flex flex-col gap-[4px] items-center">
              <p className="text-xs font-generalSans font-normal">Amount</p>
              <p className="font-bold font-clashGrotesk text-3xl max-md:text-lg">
                ₦1,000
              </p>
            </aside>

            <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base my-[24px]">
              Transaction Details
            </p>

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
              <p className="text-sm text-gray-300">Transaction ID</p>
              <div className="text-sm font-medium flex items-center gap-[2px]">
                {transactionId}
                <Icon name="copy" className="cursor-pointer" />
              </div>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Status</p>
              <span className="p-[6px] rounded-lg text-[10px] leading-[16px] font-medium bg-softGreen text-deepGreen">
                Successful
              </span>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Transaction Date</p>
              <p className="text-sm font-medium">May 5, 2025 at 11:36am</p>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Source</p>
              <div className="p-[8px] rounded-md text-[10px] leading-[16px] font-medium border border-divider flex items-center gap-[4px] max-w-fit group-hover:text-foreground group-hover:border-gray-300 group-hover:bg-background">
                <Icon
                  name="collections"
                  className="group-hover:brightness-120"
                />
                COLLECTIONS
              </div>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Collection ID</p>
              <div className="text-sm font-medium flex items-center gap-[2px]">
                {collectionId}
                <Icon name="orangeCopy" className="cursor-pointer" />
              </div>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Payment Method</p>
              <p className="text-sm font-medium">Bank Debit</p>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Bank</p>
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

            <aside className="flex justify-between items-center font-generalSans">
              <p className="text-sm text-gray-300">Transaction fee</p>
              <p className="text-sm font-medium">₦10</p>
            </aside>
            <hr className="border border-divider mt-[24px] mb-[16px]" />
          </div>
        </article>

        <article className="flex-225/548 max-md:w-full">
          <div className="bg-white p-[24px] rounded-lg flex flex-col mb-[24px]">
            <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base mb-[24px]">
              Timeline
            </p>

            <section className="flex flex-col gap-[32px]">
              <article className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <Icon
                      name="bigCheck"
                      className="p-[8px] rounded-full bg-softGreen"
                    />
                    <hr className="rotate-90 border-[1px] w-[30px] border-monaRed absolute -bottom-[19px] left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="flex flex-col gap-[4px] font-generalSans">
                    <p className="text-xs font-medium">Payment Initiated</p>
                    <p className="text-[10px] text-gray-200">
                      A collection payment has been initiated
                    </p>
                  </div>
                </div>

                <div className="font-generalSans text-[10px] text-gray-300 text-right">
                  <p>May 5, 2025</p>
                  <p>02:45pm</p>
                </div>
              </article>

              <article className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <Icon
                      name="close"
                      color="#de102a"
                      className="p-[4px] rounded-full bg-softRed"
                    />
                    <hr className="rotate-90 border-[1px] w-[30px] border-deepGreen absolute -bottom-[19px] left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="flex flex-col gap-[4px] font-generalSans">
                    <p className="text-xs font-medium">Payment Failed</p>
                    <p className="text-[10px] text-gray-200">
                      [reason for payment failure]
                    </p>
                  </div>
                </div>

                <div className="font-generalSans text-[10px] text-gray-300 text-right">
                  <p>May 5, 2025</p>
                  <p>02:45pm</p>
                </div>
              </article>

              <article className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <Icon
                      name="retrySuccess"
                      color="#0f973d"
                      className="p-[8px] rounded-full bg-softGreen"
                    />
                    <hr className="rotate-90 border-[1px] w-[30px] border-deepGreen absolute -bottom-[19px] left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="flex flex-col gap-[4px] font-generalSans">
                    <p className="text-xs font-medium">Payment Retried</p>
                    <p className="text-[10px] text-gray-200">
                      A retry was triggered for this payment.
                    </p>
                  </div>
                </div>

                <div className="font-generalSans text-[10px] text-gray-300 text-right">
                  <p>May 5, 2025</p>
                  <p>02:45pm</p>
                </div>
              </article>

              <article className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <Icon
                      name="bigCheck"
                      className="p-[8px] rounded-full bg-softGreen"
                    />
                    <hr className="rotate-90 border-[1px] w-[30px] border-deepGreen absolute -bottom-[19px] left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="flex flex-col gap-[4px] font-generalSans">
                    <p className="text-xs font-medium">Payment Confirmed</p>
                    <p className="text-[10px] text-gray-200">
                      Transaction was successful and processed
                    </p>
                  </div>
                </div>

                <div className="font-generalSans text-[10px] text-gray-300 text-right">
                  <p>May 5, 2025</p>
                  <p>02:45pm</p>
                </div>
              </article>

              <article className="flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <Icon
                    name="bigCheck"
                    className="p-[8px] rounded-full bg-softGreen"
                  />
                  <div className="flex flex-col gap-[4px] font-generalSans">
                    <p className="text-xs font-medium">Settlement Completed</p>
                    <p className="text-[10px] text-gray-200">
                      Funds transferred to your account
                    </p>
                  </div>
                </div>

                <div className="font-generalSans text-[10px] text-gray-300 text-right">
                  <p>May 5, 2025</p>
                  <p>02:45pm</p>
                </div>
              </article>
            </section>
          </div>

          <div className="bg-white p-[24px] rounded-lg flex flex-col">
            <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base mb-[24px]">
              More Actions
            </p>

            <section className="flex flex-col gap-[24px]">
              <article className="flex justify-between items-center cursor-pointer rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <div className="p-[8px] rounded-full bg-[#F4FCF5]">
                    <p className="bg-[#7ABB80] w-[16px] h-[16px] rounded-full" />
                  </div>
                  <p className="font-generalSans text-sm font-normal">
                    View Collection History
                  </p>
                </div>
                <Icon name="leftArrow" className="rotate-180" />
              </article>

              <article className="flex justify-between items-center cursor-pointer rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <Icon
                    name="download"
                    color="#FE7048"
                    className="p-[8px] rounded-full bg-monaOrange/10"
                  />
                  <p className="font-generalSans text-sm font-normal">
                    Download Receipt
                  </p>
                </div>
                <Icon name="leftArrow" className="rotate-180" />
              </article>

              <article className="flex justify-between items-center cursor-pointer rounded-lg">
                <div className="flex items-center gap-[8px]">
                  <Icon
                    name="warning"
                    color="#F3A218"
                    className="p-[8px] rounded-full bg-[#F3A2181A]"
                  />
                  <p className="font-generalSans text-sm font-normal">
                    Raise Dispute
                  </p>
                </div>
                <Icon name="leftArrow" className="rotate-180" />
              </article>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
