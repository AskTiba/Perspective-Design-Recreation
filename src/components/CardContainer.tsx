import React from "react";
import VisaCard from "./VisaCard";

const CardContainer = () => {
  const cards = [
    {
      cardHolder: "Chelangat Emily",
      cardNumber: "**** **** **** 1234",
      expiry: "12/28",
      variant: "light",
      type: "debit",
    },
    {
      cardHolder: "Berucan Kharolyne",
      cardNumber: "**** **** **** 4567",
      expiry: "06/30",
      variant: "dark",
      type: "virtual",
    },
    {
      cardHolder: "Mwesigwa Jade",
      cardNumber: "**** **** **** 9999",
      expiry: "09/27",
      variant: "gold",
      type: "credit",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cards.map((card, i) => (
        <VisaCard
          key={i}
          cardHolder={card.cardHolder}
          cardNumber={card.cardNumber}
          expiry={card.expiry}
          variant={card.variant as "light" | "dark" | "gold"}
          type={card.type as "debit" | "credit" | "virtual"}
        />
      ))}
    </div>
  );
};

export default CardContainer;
