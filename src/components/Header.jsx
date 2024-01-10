// components/Header.js
import React from "react";
import { FaQuestion, FaSearch, FaBars } from "react-icons/fa";
import Searchbar from "./Searchbar";
import Howitswork from "./Howitswork";

const Header = () => {
  return (
    <div
      className="bg-[white] box-border w-full flex flex-row items-center justify-start py-3 px-8 gap-[16px] text-left text-xl text-black-12 font-body-2-medium border-b-[1px] border-solid border-black-85"
     
    >
      <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[16px]">
        <div className="overflow-hidden flex flex-row items-center justify-start">
          <div className="relative  font-xl">Payouts</div>
        </div>
       
       <Howitswork/>

      </div>
      <div className="rounded-md bg-black-95 w-[400px] flex flex-row items-center justify-start py-[9px] px-4 box-border gap-[8px] text-mini text-[#808080]">
        <Searchbar/>
      </div>
      <div className="flex-1 shrink-0 flex flex-row items-start justify-end gap-3">
       <img src="/icon2header.png"/>
       <img src="/icon1header.png"/>

      </div>
    </div>
  );
};

export default Header;
