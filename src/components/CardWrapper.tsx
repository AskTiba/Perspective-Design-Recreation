import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "gold" | "silver";
  className?: string;
};

const baseStyles = `
  rounded-2xl 
  p-6 
  shadow-xl 
  border 
  backdrop-blur-lg 
  transition 
  duration-300
`;

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  light: `
      bg-gradient-to-br from-white/20 via-white/10 to-blue-100/5 
      border-white/20 
      ring-1 ring-white/10 
      text-white
    `,
  dark: `
      bg-black/70 
      border-gray-800 
      text-white
    `,
  gold: `
      bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 
      border-yellow-500 
      text-black
    `,
  silver: `
      bg-gradient-to-br from-gray-100/40 to-gray-300/10 
      border-gray-200/30 
      text-gray-800
    `,
};

const CardWrapper = ({ children, variant = "light", className }: Props) => {
  return (
    <div className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </div>
  );
};

export default CardWrapper;
