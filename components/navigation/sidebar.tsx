"use client";
import Icon from "@/public/svgs/dynamicSvgs";
import Image from "next/image";
import { activity, mainMenu, profile } from "@/data/sidebarData";
import { Menu, SideBarMenuLayout } from "./sidebarmenulayout";
import { useStateContext } from "@/contexts/ContextProvider";

export default function Sidebar() {
  const { sideOpen, setSideOpen, sideOpenMobile, setSideOpenMobile } =
    useStateContext();

  return (
    <main
      className="max-md:hidden sticky top-[1px] h-[100vh] bg-white transition-all duration-700 ease-in-out flex flex-col justify-between"
      style={{
        width: sideOpen ? "20%" : "90px",
        minWidth: sideOpen ? "280px" : "90px",
        padding: sideOpen ? "32px 24px" : "32px 10px",
      }}
    >
      <main>
        <section
          className={`w-full flex items-center mb-[10px] ${
            sideOpen ? "justify-between" : "justify-start"
          }`}
        >
          <aside
            className={`flex  justify-center items-center transition-all duration-300 ease-in-out ${
              sideOpen ? "gap-[12px]" : "gap-0 ps-3.5"
            }`}
          >
            {sideOpen ? (
              <Image
                src="/svgs/mona-emblem.svg"
                alt="mona-logo"
                height={35}
                width={35}
                className="w-[35px] rounded-full border border-black/30 hover:brightness-70 transition cursor-pointer"
              />
            ) : (
              <div
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
            )}
          </aside>
          <div
            className={`overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
              sideOpen
                ? "opacity-100 translate-x-0 px-[7px] py-[10px]"
                : "opacity-0 -translate-x-10 w-0 pointer-events-none"
            }`}
          >
            <Icon
              name="close"
              onClick={() => {
                if (window.innerWidth > 768) {
                  setSideOpen(!sideOpen);
                } else {
                  setSideOpenMobile(!sideOpenMobile);
                }
              }}
              className="cursor-pointer hover:bg-black/10 transition rounded-full"
            />
          </div>
        </section>

        <section
          className={`bg-background rounded-lg w-full flex items-center mb-[24px] ${
            sideOpen ? "justify-between" : "justify-start"
          }`}
          style={{ padding: sideOpen ? "12px 12px" : "12px 5px" }}
        >
          <aside
            className={`flex  justify-center items-center ${
              sideOpen ? "gap-[12px]" : "gap-0 ps-2"
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
                sideOpen
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
              sideOpen
                ? "opacity-100 translate-x-0 px-[7px] py-[10px]"
                : "opacity-0 -translate-x-10 w-0 pointer-events-none"
            }`}
          >
            <Icon name="arrowDown" />
          </div>
        </section>
        <hr className="border border-divider mb-[16px]" />

        <SideBarMenuLayout menuHeader="MAIN MENU" array={mainMenu} />
        <hr className="border border-divider mb-[16px]" />

        <SideBarMenuLayout menuHeader="ACTIVITY" array={activity} />
        <hr className="border border-divider mb-[16px]" />
      </main>

      <main>
        <SideBarMenuLayout menuHeader="PROFILE" array={profile} />
        <hr className="border border-divider mb-[16px]" />

        <section
          className={`bg-background rounded-lg w-full flex items-center ${
            sideOpen ? "justify-between" : "justify-center"
          }`}
          style={{ padding: sideOpen ? "12px 12px" : "12px 5px" }}
        >
          <aside
            className={`flex  justify-center items-center ${
              sideOpen ? "gap-[12px]" : "gap-0"
            }`}
          >
            <div
              className={`overflow-hidden whitespace-nowrap transition-all duration-900 ease-in-out ${
                sideOpen
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
                sideOpen
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
              !sideOpen && "rotate-180 flex justify-center"
            }`}
            onClick={() => setSideOpen(!sideOpen)}
          >
            <Icon name="toggle" />
          </div>
        </section>
      </main>
    </main>
  );
}
