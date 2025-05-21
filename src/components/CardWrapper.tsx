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

const CardWrapper = (props: Props) => {
  return <div>CardWrapper</div>;
};

export default CardWrapper;
