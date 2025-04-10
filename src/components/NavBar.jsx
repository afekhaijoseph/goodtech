import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="min-w-full h-fit flex flex-row items-center justify-between bg-white border-y border-gray-200 p-3">
        <h2 className="text-xl font-semibold text-blue-950">
          <a href="/">Good<span className="text-[#ff00cc]">Tech</span>{" "}
          <span className="text-[#333399]">HQ</span></a>
          
        </h2>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger w-12 md:hidden cursor-pointer"
        >
          <div className="w-full flex flex-col gap-1 transition-all duration-300">
            <span
              className={`block h-1 bg-[#333399] rounded-md transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-[#333399] rounded-md transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 bg-[#333399] rounded-md transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </div>
        <div className="hidden gap-10 text-accent items-center text-gray-600 md:flex">
          <a onClick={() => scrollToSection("about")} className="hover:text-blue-500">
            About
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-blue-500">
            Products
          </a>
          <a onClick={() => scrollToSection("whychoose")} className="hover:text-blue-500">
            Why Choose Us
          </a>
          <a onClick={() => scrollToSection("faqs")} className="hover:text-blue-500">
            FAQs
          </a>
          <button
            onClick={() => scrollToSection("git")}
            className="hidden font-semibold h-fit rounded-md p-2 text-white md:inline-flex bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] hover:from-[rgb(255,0,204)] hover:to-[rgb(51,51,153)] transition-colors duration-300 ease-in-out"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full px-4 py-2 flex flex-col gap-4 text-gray-700 border-t border-gray-200">
          <a onClick={() => scrollToSection("about")} className="hover:text-blue-500">
            About
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-blue-500">
            Products
          </a>
          <a onClick={() => scrollToSection("whychoose")} className="hover:text-blue-500">
            Why Choose Us
          </a>
          <a onClick={() => scrollToSection("faqs")} className="hover:text-blue-500">
            FAQs
          </a>
          <button
            onClick={() => scrollToSection("git")}
            className="bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] text-white p-2 rounded-md"
          >
            Get in Touch
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;