"use client";

import Link from "next/link";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonType = "primary" | "small" | "round" | "secondary" | "sliderButton";

interface CommonProps {
   children: ReactNode;
   to?: string;
   variant?: ButtonType;
   className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
   "sm:px6 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 ";

const styles: Record<ButtonType, string> = {
   primary: `${base} px-4 py-3 md:py-4 md:px-6`,
   small: `${base} py-2 px-4 md:px-5 md:py-2.5 text-xs`,
   round: `${base} py-1 px-2.5 md:px-3.5 md:py-2 text-sm`,
   secondary:
      "sm:px6 inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-2.5 md:py-3.5 md:px-6",
   sliderButton: `bg-white border-gray-300 text-gray-400 border-1 p-2 rounded-full transition-colors duration-200 hover:bg-white hover:border-gray-400 hover:text-gray-500 active:bg-black active:text-gray-50`,
};

function Button({
   children,
   to,
   variant = "primary",
   className = "",
   ...rest
}: ButtonProps) {
   const combinedClasses = `${styles[variant]} ${className}`;

   if (to) {
      return (
         <Link href={to} className={combinedClasses}>
            {children}
         </Link>
      );
   }

   return (
      <button className={combinedClasses} type="button" {...rest}>
         {children}
      </button>
   );
}

export default Button;
