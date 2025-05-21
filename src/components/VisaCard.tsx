import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you use className merging
import VisaB from "./SVG_Components/VisaB";

type Props = {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  variant?: "light" | "dark" | "gold";
  orientation?: "horizontal" | "vertical";
  type?: "debit" | "credit" | "virtual";
};

function VisaCard({
  cardHolder,
  cardNumber,
  expiry,
  variant = "light",
  orientation = "horizontal",
  type = "debit",
}: Props) {
  const isVertical = orientation === "vertical";

  const bgVariants = {
    light:
      "bg-gradient-to-br from-blue-400/40 to-blue-500/20 border border-blue-600/20 backdrop-opacity-80 shadow-xl text-gray-800",
    dark: "bg-black/80 text-white",
    gold: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-black",
  };

  return (
    <div
      className={cn(
        "relative w-[320px] h-[200px] md:w-[380px] md:h-[220px] rounded-2xl shadow-xl p-5 overflow-hidden backdrop-blur-lg border border-white/20 transform transition-transform duration-300 hover:scale-105",
        bgVariants[variant],
        isVertical ? "rotate-90 origin-bottom-left" : ""
      )}
    >
      {/* Visa logo and chip */}
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 bg-white/80 rounded-md" />
        <VisaB height={30} />
      </div>

      {/* Card number */}
      <div className="mt-8 text-xl tracking-widest font-mono">{cardNumber}</div>

      {/* Holder and expiry */}
      <div className="flex justify-between items-center mt-6 text-sm uppercase font-medium">
        <div>
          <div className="text-xs opacity-60">Card Holder</div>
          <div>{cardHolder}</div>
        </div>
        <div className="">
          <div className="text-xs opacity-60">Expires</div>
          <div>{expiry}</div>
        </div>
      </div>

      {/* Optional tag */}
      <div className="absolute bottom- right-4 text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-md">
        {type.toUpperCase()}
      </div>
    </div>
  );
}

export default VisaCard;
