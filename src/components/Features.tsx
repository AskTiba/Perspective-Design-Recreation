"use client";

import React from "react";
import VisaB from "./SVG_Components/VisaB";
import CardContainer from "./CardContainer";
import Coke from "./SVG_Components/Coke";
import DHL from "./SVG_Components/DHL";
import Google from "./SVG_Components/Google";
import Microsoft from "./SVG_Components/Microsoft";
import Fedex from "./SVG_Components/Fedex";
import Duolingo from "./SVG_Components/Duolingo";
import UgandaAirlines from "./SVG_Components/UgandaAirlines";
import { Button } from "./ui/button";
import Video from "./ui/video";

import ReactPlayer from "react-player";
import Image from "next/image";
import thumbnail from "@/assets/huawei.svg";

type Props = {};

const Features = (props: Props) => {
  return (
    <main className="p-7 flex bg-gray-200/80 flex-col items-center sm:flex-row sm:mx-20 sm:justify-evenly sm:gap-64  border gap-10 mx-6 rounded-3xl">
      <section className="p-2 w-full rounded-lg bg-primary/50 sm:order-2 sm:w-96">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          light={
            <Image
              className="p-4 "
              src={thumbnail}
              width={200}
              alt="Picture of the author"
            />
          }
          controls={true}
          playing={false}
          width="100%"
          height="auto"
        />
      </section>

      <section className="flex max-w-[350px] flex-col justify-center text-center gap-6 sm:order-1">
        <p className="text-2xl font-semibold leading-[30px] sm:text-[32px] sm:leading-[40px] ">
          Perspective has 40+ new features 🥳
        </p>
        <p className="text-[16px] font-semibold leading-[22px] text-[#5b5b5b]">
          Update on Funnels, Metrics, Contacts, Emails & more. All in one
          powerful growth platform!
        </p>
        <Button variant="outline" className="text-primary">
          Watck lauch event
        </Button>
      </section>
    </main>
  );
};

export default Features;
