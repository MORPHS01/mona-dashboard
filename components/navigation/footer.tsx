import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="flex justify-center bg-white mx-auto w-full py-[15px] mt-[30px] rounded-lg">
      <p className="font-clashGrotesk">
        <span className="font-medium">Designed and Developed by</span>{" "}
        <Link
          target="_blank"
          href="https://ayonimofe-portfolio-website.vercel.app/"
          className="font-generalSans text-monaOrange hover:text-[#fbad97] font-medium"
        >
          Ayonimofe Atoyebi
        </Link>
      </p>
    </section>
  );
}
