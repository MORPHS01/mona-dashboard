"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { MenuType } from "@/data/sidebarData";
import Icon from "@/public/svgs/dynamicSvgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarMenuLayoutProps = {
  menuHeader: string;
  array: MenuType;
};

export function SideBarMenuLayout({
  menuHeader,
  array,
}: SideBarMenuLayoutProps) {
  const pathname = usePathname();
  const { sideOpen } = useStateContext();

  return (
    <main>
      <p
        className={`${
          !sideOpen && "opacity-0"
        } font-generalSans text-xs text-gray-300 font-medium -tracking-[3%] mb-[10px]`}
      >
        {menuHeader}
      </p>
      <section className="flex flex-col gap-[8px] mb-[16px]">
        {array.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`${
              pathname.startsWith(item.link) ? "bg-background" : "bg-white"
            } ${
              sideOpen ? "justify-between" : "justify-start pl-[25px]"
            } flex justify-between items-center px-[12px] py-[16px] rounded-lg hover:bg-background transition-all duration-200 ease-in-out`}
          >
            <div className="flex gap-[7px] items-center">
              <Icon
                name={item.icon}
                color={pathname.startsWith(item.link) ? "#fe7048" : "#9a9a93"}
              />
              <p
                className={`${
                  pathname.startsWith(item.link)
                    ? "text-foreground"
                    : "text-gray-200"
                } ${
                  sideOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                } overflow-hidden whitespace-nowrap transition-all duration-900 font-medium font-generalSans text-sm`}
              >
                {item.title}
              </p>
            </div>
            {item.title === "Setup Guide" && (
              <div
                className={`${
                  sideOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                } overflow-hidden whitespace-nowrap transition-all duration-900 rounded-lg px-[4px] py-[2px] font-medium font-generalSans text-xs ${
                  pathname.startsWith("/setup-guide")
                    ? "bg-softOrange text-monaOrange"
                    : "bg-divider text-gray-100"
                }`}
              >
                30% Done
              </div>
            )}
          </Link>
        ))}
      </section>
    </main>
  );
}

export function SideBarMenuLayoutMobile({
  menuHeader,
  array,
}: SideBarMenuLayoutProps) {
  const pathname = usePathname();
  const { sideOpenMobile, setSideOpenMobile } = useStateContext();

  return (
    <main>
      <p
        className={`${
          !sideOpenMobile && "opacity-0"
        } font-generalSans text-xs text-gray-300 font-medium -tracking-[3%] mb-[10px]`}
      >
        {menuHeader}
      </p>
      <section className="flex flex-col gap-[4px] mb-[16px]">
        {array.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            onClick={() => window.innerWidth < 768 && setSideOpenMobile(false)}
            className={`${
              pathname.startsWith(item.link) ? "bg-background" : "bg-white"
            } ${
              sideOpenMobile ? "justify-between" : "justify-start pl-[25px]"
            } flex justify-between items-center px-[10px] py-[12px] rounded-lg hover:bg-background transition-all duration-200 ease-in-out`}
          >
            <div className="flex gap-[7px] items-center">
              <Icon
                name={item.icon}
                color={pathname.startsWith(item.link) ? "#fe7048" : "#9a9a93"}
              />
              <p
                className={`${
                  pathname.startsWith(item.link)
                    ? "text-foreground"
                    : "text-gray-200"
                } ${
                  sideOpenMobile
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                } overflow-hidden whitespace-nowrap transition-all duration-900 font-medium font-generalSans text-sm`}
              >
                {item.title}
              </p>
            </div>
            {item.title === "Setup Guide" && (
              <div
                className={`${
                  sideOpenMobile
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 w-0 pointer-events-none"
                } overflow-hidden whitespace-nowrap transition-all duration-900 rounded-lg px-[4px] py-[2px] font-medium font-generalSans text-xs ${
                  pathname.startsWith("/setup-guide")
                    ? "bg-softOrange text-monaOrange"
                    : "bg-divider text-gray-100"
                }`}
              >
                30% Done
              </div>
            )}
          </Link>
        ))}
      </section>
    </main>
  );
}
