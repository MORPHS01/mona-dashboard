"use client";
import Icon from "@/public/svgs/dynamicSvgs";
import Image from "next/image";
import { activity, mainMenu, profile } from "@/data/sidebarData";
import { SideBarMenuLayoutMobile } from "./sidebarmenulayout";
import { useStateContext } from "@/contexts/ContextProvider";

export default function MobileSidebar() {
  const { sideOpenMobile, setSideOpenMobile } = useStateContext();

  return (
    <main
      className={`md:hidden fixed z-[1000] bg-white overflow-auto left-0 top-0 p-[32px] w-screen h-screen transition-all duration-350 ease-in-out ${
        sideOpenMobile ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section
        className={`w-full flex items-center mb-[10px] ${
          sideOpenMobile ? "justify-between" : "justify-start"
        }`}
      >
        <aside
          className={`flex  justify-center items-center ${
            sideOpenMobile ? "gap-[12px]" : "gap-0 ps-3.5"
          }`}
        >
          <Image
            src="/svgs/mona-emblem.svg"
            alt="mona-logo"
            height={35}
            width={35}
            onClick={() => setSideOpenMobile(!sideOpenMobile)}
            className="w-[35px] rounded-full border border-black/30 hover:brightness-70 transition cursor-pointer"
          />
        </aside>
        <div
          className={`overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
            sideOpenMobile
              ? "opacity-100 translate-x-0 px-[7px] py-[10px]"
              : "opacity-0 -translate-x-10 w-0 pointer-events-none"
          }`}
        >
          <Icon
            name="close"
            onClick={() => setSideOpenMobile(!sideOpenMobile)}
            className="cursor-pointer hover:bg-black/10 transition rounded-full"
          />
        </div>
      </section>
      <section className="flex flex-col justify-between">
        <main>
          <section
            className={`bg-background rounded-lg w-full flex items-center mb-[24px] ${
              sideOpenMobile ? "justify-between" : "justify-start"
            }`}
            style={{ padding: sideOpenMobile ? "12px 12px" : "12px 5px" }}
          >
            <aside
              className={`flex  justify-center items-center ${
                sideOpenMobile ? "gap-[12px]" : "gap-0 ps-2"
              }`}
            >
              <Image
                src="/images/ajo-profile.png"
                alt="ajo-image"
                height={40}
                width={40}
                className="w-[40px] rounded-full"
              />
              <div
                className={`flex flex-col overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
                  sideOpenMobile
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                }`}
              >
                <p className="font-medium font-clashGrotesk">Ajo app</p>
                <p className="font-normal font-generalSans text-gray-200 text-sm">
                  ID - 34567
                </p>
              </div>
            </aside>
            <div
              className={`overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
                sideOpenMobile
                  ? "opacity-100 translate-x-0 px-[7px] py-[10px]"
                  : "opacity-0 -translate-x-10 w-0 pointer-events-none"
              }`}
            >
              <Icon name="arrowDown" />
            </div>
          </section>
          <hr className="border border-divider mb-[16px]" />
          <SideBarMenuLayoutMobile menuHeader="MAIN MENU" array={mainMenu} />
          <hr className="border border-divider mb-[16px]" />
          <SideBarMenuLayoutMobile menuHeader="ACTIVITY" array={activity} />
          <hr className="border border-divider mb-[16px]" />
        </main>
        <main>
          <SideBarMenuLayoutMobile menuHeader="PROFILE" array={profile} />
          <hr className="border border-divider mb-[16px]" />
          <section
            className={`bg-background rounded-lg w-full flex items-center ${
              sideOpenMobile ? "justify-between" : "justify-center"
            }`}
            style={{ padding: sideOpenMobile ? "12px 12px" : "12px 5px" }}
          >
            <aside
              className={`flex  justify-center items-center ${
                sideOpenMobile ? "gap-[12px]" : "gap-0"
              }`}
            >
              <div
                className={`overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
                  sideOpenMobile
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                }`}
              >
                <Image
                  src="/images/user-image.jpg"
                  alt="user-image"
                  height={40}
                  width={40}
                  className="w-[40px] rounded-full"
                />
              </div>
              <div
                className={`flex flex-col overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
                  sideOpenMobile
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                }`}
              >
                <p className="font-medium font-clashGrotesk">Tiwa Sulaiman</p>
                <p className="font-normal font-generalSans text-gray-200 text-sm">
                  Account owner
                </p>
              </div>
            </aside>
            <div
              className={`cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                !sideOpenMobile && "rotate-180 flex justify-center"
              }`}
              onClick={() => setSideOpenMobile(!sideOpenMobile)}
            >
              <Icon name="toggle" />
            </div>
          </section>
        </main>
      </section>
    </main>
  );
}
