"use client";

import { useState } from "react";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

const options = [
  { label: "ABOUT", value: "ABOUT" },
  { label: "SKILLS", value: "SKILLS" },
  { label: "EXPERIENCES", value: "EXPERIENCES" },
  { label: "PROJECTS", value: "PROJECTS" },
  { label: "CONTACT ME", value: "CONTACT ME" },
];

const Navbar = () => {
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
    // You can perform any action here with the selected option
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: Option) => {
    handleSelect(option);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-lime-50 border-b">
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black pr-16 pt-6"
        >
          <Image
            src="/images/cloud.png"
            alt="cloud"
            width={75}
            height={25}
            loading="eager"
            priority
          />
          <p className="absolute top-11 right-20 font-lg font-semibold ">
            MENU
          </p>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-4 p-6 top-1/2 gap-1 w-52 bg-transparent flex flex-col items-center">
            {options.map((option, index) => (
              <div key={index} className="flex">
                <Image
                  src="/images/raindrop.png"
                  alt="raindrop"
                  width={15}
                  height={10}
                  loading="eager"
                />
                <button
                  key={option.value}
                  onClick={() => handleSelectOption(option)}
                  className="block p-0.5 text-sm text-black hover:italic w-full self-center"
                >
                  {option.label}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
