import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <header className="border border-[#6881FF] bg-gradient-to-r from-[#151515] via-[#101C5C] to-[#101C5C]">
        <div className="px-[10px] h-[80px] w-full max-w-screen-lg mx-auto flex justify-between items-center ">
          <div>
            <img src={logo} alt="logo" height={54} />
          </div>
          <nav
            className={`transition transition-2 fixed top-0 flex flex-col gap-7 bg-gradient-to-b from-[#151515] via-[#101C5C] to-[#101C5C] bg-black md:static md:h-auto md:flex-row md:justify-start md:from-transparent md:bg-transparent md:px-0 h-screen w-[300px] md:w-auto max-w-full px-8 justify-center ${
              visibility ? "right-0" : "right-[-100%]"
            }`}
          >
            <X
              className="md:hidden absolute right-[30px] top-[20px] text-white h-8 w-8 cursor-pointer"
              onClick={() => setVisibility(false)}
            />
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              Process
            </a>
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              Work
            </a>
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[#E4E6F2] text-[18px] leading-[30px] font-[400]"
            >
              FAQs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="ml-2 font-[600] text-[16px] leading-[30px] w-[134px] h-[53px] rounded-lg inline-flex justify-center items-center border border-[#6881FF] text-white"
            >
              Book a call
            </a>
            <Menu
              onClick={() => setVisibility(true)}
              className="h-8 w-8 md:hidden cursor-pointer text-white"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
