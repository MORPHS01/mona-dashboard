"use client";
import Icon from "@/public/svgs/dynamicSvgs";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../shared/button";
import { toast } from "react-toastify";

export default function MoreActions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-white p-[24px] rounded-lg flex flex-col">
      <p className="font-clashGrotesk font-semibold text-lg max-sm:text-base mb-[24px]">
        More Actions
      </p>

      <section className="flex flex-col gap-[24px]">
        <article className="flex justify-between items-center cursor-pointer rounded-lg">
          <div className="flex items-center gap-[8px]">
            <Icon
              name="download"
              color="#FE7048"
              className="p-[8px] rounded-full bg-monaOrange/10"
            />
            <p className="font-generalSans text-sm font-normal">
              Download History
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

        <article
          onClick={() => setModalOpen(true)}
          className="flex justify-between items-center cursor-pointer rounded-lg"
        >
          <div className="flex items-center gap-[8px]">
            <Icon
              name="close"
              color="#de102a"
              className="p-[8px] rounded-full bg-softRed"
            />
            <p className="font-generalSans text-sm font-normal">
              Cancel Collections
            </p>
          </div>
          <Icon name="leftArrow" className="rotate-180" />
        </article>
      </section>
      <CancelCollectionModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </main>
  );
}

type CancelCollectionModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function CancelCollectionModal({
  modalOpen,
  setModalOpen,
}: CancelCollectionModalProps) {
  return (
    <main
      className={`fixed z-[1000] inset-0 w-screen h-screen transition-all duration-350 ease-in-out ${
        modalOpen ? "scale-100" : "scale-0"
      }`}
    >
      <div
        className="fixed z-[1000] left-0 top-0 cursor-pointer bg-modalBackground backdrop-blur-xs w-full h-full"
        onClick={() => setModalOpen(false)}
      />

      <section className="fixed z-[1000] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white p-[24px] max-sm:p-[18px] rounded-[10px] w-[37%] min-w-[415px] max-sm:min-w-[90%]">
        <aside className="flex flex-col items-center gap-[16px]">
          <div className="flex justify-between w-full mb-[16px]">
            <p />
            <Icon
              name="close"
              color="black"
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <Image
            src="/svgs/error-states.svg"
            alt="error-state"
            width={115}
            height={115}
          />
          <div className="text-center">
            <p className="font-clashGrotesk font-semibold text-lg">
              Stop collection from [Payer&apos;s Name]?
            </p>
            <p className="font-generalSans font-normal text-base text-gray-300">
              You&apos;re about to stop receiving payments from [Collection
              Name] for this payer. This action can&apos;t be undone.
            </p>
          </div>
          <Button
            bg="#DE102A"
            className="w-full"
            onClick={() => {
              setModalOpen(false);
              toast("Collections have been Successfully cancelled");
            }}
          >
            Cancel Collection
          </Button>
        </aside>
      </section>
    </main>
  );
}
