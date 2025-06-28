import { icons } from "@/public/svgs/dynamicSvgs";

export type MenuType = {
  title: string;
  icon: keyof typeof icons;
  link: string;
}[];

export const mainMenu: MenuType = [
  { title: "Setup Guide", icon: "flag", link: "/setup-guide" },
  { title: "Overview", icon: "fourSquares", link: "/overview" },
  { title: "Customers", icon: "people", link: "/customers" },
];

export const activity: MenuType = [
  { title: "Integrations", icon: "circuit", link: "/integrations" },
  { title: "Transactions", icon: "arrows", link: "/transactions" },
];

export const profile: MenuType = [
  { title: "Settings", icon: "settings", link: "/settings" },
  { title: "Support", icon: "chat", link: "/support" },
];
