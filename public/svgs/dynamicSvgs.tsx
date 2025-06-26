// const starIconClassName =
//   "fill-[#FFDA0A] dark:fill-[#CCAD00] w-[20px] max-md:w-[17px] transition-all duration-200 ease-in-out";

type iconProps = React.HTMLAttributes<HTMLDivElement> & {
  name: keyof typeof icons;
  noHover?: boolean;
  noPointer?: boolean;
};

// Define a mapping of SVGs
const icons = {
  example: () => (
    <svg
      className=""
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  ),
  // example: () => (
  //   <svg className={categoriesIconClassName} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //   </svg>
  // ),
};

// Icon component
export default function Icon({ name, ...rest }: iconProps) {
  // Render the SVG based on the name prop
  const SvgIcon = icons[name];
  return (
    // <main
    //   {...rest}
    //   className={`${
    //     !noHover && "hover:scale-110 transition-all duration-300 ease-in-out"
    //   } ${!noPointer && "cursor-pointer"}`}
    // >
    // //   {
    <main {...rest}>{SvgIcon()}</main>

    // }</main>
  );
}
