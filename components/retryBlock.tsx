"use client";
import Icon from "@/public/svgs/dynamicSvgs";
import React, { useState } from "react";

export default function RetryBlock() {
  const [loading, setLoading] = useState(false);

  function setIsLoading(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }
  return (
    <main>
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          className="fill-[#9A9A93]"
        >
          <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      ) : (
        <span
          onClick={setIsLoading}
          className="flex gap-[2px] items-center group"
        >
          <Icon
            name="retry"
            className="stroke-[#9A9A93] group-hover:stroke-[#6a6c60]"
          />
          <p className="underline text-[#9A9A93] group-hover:text-[#6a6c60]">
            Retry
          </p>
        </span>
      )}
    </main>
  );
}
