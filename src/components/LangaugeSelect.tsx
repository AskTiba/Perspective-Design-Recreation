"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // adjust to your path

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"en" | "de">("en");

  // Simple toggle list
  const languages = [
    { label: "English", value: "en" },
    { label: "Deutsch", value: "de" },
  ];

  const toggleLang = selectedLang === "en" ? "de" : "en";

  return (
    <div
      className="inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Select
        open={open}
        onOpenChange={setOpen}
        value={selectedLang}
        onValueChange={(val) => setSelectedLang(val as "en" | "de")}
      >
        <SelectTrigger className="w-[180px] text-sm text-[#333333] leading-[20px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={toggleLang}>
            {languages.find((l) => l.value === toggleLang)?.label}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
