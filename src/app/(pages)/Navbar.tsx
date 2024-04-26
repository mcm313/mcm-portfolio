"use client";

import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

const options = [
  { label: "About", value: "About" },
  { label: "My Skills", value: "Skills" },
  { label: "Portfolio", value: "Portfolio" },
  { label: "Contact", value: "Contact" },
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
    <nav className="fixed top-0 w-full z-50 bg-lime-50 border-b">
      {/* for desktop */}
      <div className="md:flex gap-6 justify-end px-6 hidden">
        {options.map((option, index) => (
          <div key={index} className="flex">
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
      {/* for mobile */}
      <div className="md:hidden justify-end flex">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black pr-16">
          <p className="font-lg font-semibold">MENU</p>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-4 p-6 top-1/2 gap-1 w-52 bg-transparent flex flex-col items-center">
            {options.map((option, index) => (
              <div key={index} className="flex">
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
