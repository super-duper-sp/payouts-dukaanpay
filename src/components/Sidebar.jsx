import React from 'react'
import Sidebaritems from './Sidebaritems'
import Walletcredits from './Walletcredits'
import Account from './Account';

const Sidebar = () => {
  return (
    

    <aside className="w-64 flex flex-col bg-[#1E2640] text-white p-4">
   
   <div className="bg-secondary-navbar w-56 flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px] text-left text-mini text-black-100 font-sub-title-medium flex-1">
    <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
      <a href="">
      <div className="w-48 shrink-0 flex flex-row items-center justify-start relative gap-[12px]">

        <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
        <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
          <div className="text-white no-underline self-stretch relative leading-[22px] font-medium">
            Nishyan
          </div>
          <div className="text-white self-stretch relative text-smi [text-decoration:underline] leading-[16px] font-body-2-medium opacity-[0.8]">
            Visit store
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
          alt=""
          src="/Navbar/nishyan.png"
        />
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
          alt=""
          src="/arrowdownwhite.png"
        />
      </div>
      </a>
      <div className="flex-1 shrink-0 flex flex-col items-start justify-start gap-[4px]">
        
        <Sidebaritems/>

      </div>
    </div>
    <Walletcredits/>
  </div>
  </aside>

  );
}

export default Sidebar