import React from "react";
import Image from "next/image";
import Facebook from "./SVG_Components/Facebook";
import LinkedIn from "./SVG_Components/LinkedIn";
import Instagram from "./SVG_Components/Instagram";
import Youtube from "../assets/youtube.svg";
import GDPR from "../assets/GDPR.webp";
import remote from "../assets/remote.webp";
import climate from "../assets/climate.webp";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FooterSectionProps = {
  title: string;
  links: string[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <section className="flex flex-col gap-3 m-6">
    <h1 className="text-sm font-semibold text-[#141414] leading-[20px]">
      {title}
    </h1>
    <div className="flex flex-col gap-3">
      {links.map((link, idx) => (
        <h6 key={idx} className="text-sm text-[#333333] leading-[20px]">
          {link}
        </h6>
      ))}
    </div>
  </section>
);

type SocialLinkProps = {
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ icon, label }: SocialLinkProps) => (
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 flex items-center justify-center">{icon}</div>
    <h6 className="text-sm text-[#333333] leading-[20px]">{label}</h6>
  </div>
);

const footerData = [
  {
    title: "Use cases",
    links: [
      "Generate appointments",
      "Sell online",
      "Source talent",
      "Make online sales",
      "Gain insights",
      "For Agencies",
    ],
  },
  {
    title: "Product",
    links: [
      "Why Perspective",
      "Features",
      "Templates",
      "Pricing",
      "Status",
      "Login",
    ],
  },
  {
    title: "Resources",
    links: [
      "Affiliate Partner",
      "Agency Partner",
      "Crashcourse",
      "Academy",
      "Community",
      "Helpcenter",
      "Blog",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Contact", "EFRE", "Careers"],
  },
  {
    title: "Legal",
    links: ["Cookie Policies", "Privacy", "Imprint", "Terms & Conditions"],
  },
];

const socialLinks: SocialLinkProps[] = [
  { icon: <Facebook />, label: "Facebook" },
  { icon: <Instagram />, label: "Instagram" },
  {
    icon: (
      <Image
        src={Youtube}
        alt="YouTube"
        width={20}
        height={20}
        className="object-contain"
      />
    ),
    label: "YouTube",
  },
  { icon: <LinkedIn />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <main className="border-b-8 border-gradient-to-r from-blue-500 via-purple-500 to-orange-500 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-content-around gap-6">
        {footerData.map((section, idx) => (
          <FooterSection
            key={idx}
            title={section.title}
            links={section.links}
          />
        ))}
        <section className="flex flex-col gap-3 m-6">
          <h1 className="text-sm font-semibold text-[#141414] leading-[20px]">
            Follow us
          </h1>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, idx) => (
              <SocialLink key={idx} icon={link.icon} label={link.label} />
            ))}
          </div>
        </section>
      </div>
      <article className="lg:flex lg:justify-between lg:items-center lg:gap-6 lg:px-10">
        <div className="flex gap-5 justify-center lg:order-2 my-10">
          <div className="">
            <Image src={GDPR} width={75} alt="Picture of the author" />
          </div>
          <div className="">
            <Image src={climate} width={75} alt="Picture of the author" />
          </div>
          <div className="">
            <Image src={remote} width={75} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:order-1 my-20 gap-6">
          <div className="">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  className="text-sm text-[#333333] leading-[20px]"
                  placeholder="English"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-center text-sm text-[#333333] leading-[20px] font-bold ">
            © Perspective Software GmbH
          </p>
        </div>
      </article>
    </main>
  );
};

export default Footer;
