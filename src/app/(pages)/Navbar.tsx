"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@/components/Icons/MenuIcon";

const options = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#aboutme" },
  { label: "My Skills", href: "/#skills" },
  { label: "Resume", href: "/#resume" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-lime-50 border-b">
      {/* for desktop */}
      <div className="md:flex gap-6 justify-end px-6 hidden">
        {options.map((option, index) => (
          <div key={index} className="flex">
            <Link
              href={option.href}
              className="block p-0.5 text-sm text-black hover:italic w-full self-center"
            >
              {option.label}
            </Link>
          </div>
        ))}
      </div>
      {/* for mobile */}
      <div className="md:hidden justify-end flex">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black pr-9">
          <p className="font-lg font-semibold">
            <MenuIcon className="h-8 w-8" />
          </p>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-4 p-4 bg-black top-1/2 gap-1 w-auto flex flex-col rounded-lg items-center">
            {options.map((option, index) => (
              <div key={index} className="flex">
                <Link
                  href={option.href}
                  className="block p-0.5 text-sm text-white hover:italic w-full self-center"
                >
                  {option.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
