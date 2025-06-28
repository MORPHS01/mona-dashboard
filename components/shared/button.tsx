"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "fill" | "outline";
};

type FilledButton = {
  variant?: "fill";
  bg?: string;
  text?: string;
};

type OutlinedButton = {
  variant: "outline";
  border?: string;
  text?: string;
};

type ButtonProps = BaseProps & (FilledButton | OutlinedButton);

export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  const variant = props.variant || "fill";
  const bg = (props as FilledButton).bg || "#FE7048";
  const fillText = (props as FilledButton).text || "white";
  const border = (props as OutlinedButton).border || "#FE7048";
  const outlineText = (props as OutlinedButton).text || "#FE7048";

  const style =
    variant === "fill"
      ? { backgroundColor: bg, color: fillText, border: "none" }
      : {
          border: `2px solid ${border}`,
          color: outlineText,
        };

  return (
    <button
      {...rest}
      className={twMerge(
        "rounded-sm cursor-pointer transition-all duration-300 ease-in-out px-[16px] py-[12px] text-sm font-medium font-generalSans",
        variant === "fill"
          ? "hover:brightness-85"
          : "bg-transparent hover:bg-[#00000008]",
        className
      )}
      style={style}
    >
      {children}
    </button>
  );
}
