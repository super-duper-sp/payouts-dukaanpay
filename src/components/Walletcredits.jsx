import React from 'react'

const Walletcredits = () => {
  return (
    <div className="rounded bg-[#353C53] w-48 flex flex-col items-start justify-start py-1.5 px-3 box-border text-left text-smi text-black-100 font-sub-title-medium">
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <div className="rounded bg-gray shrink-0 flex flex-row items-start justify-start p-1.5">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/Navbar/credits.png"
          />
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[16px] opacity-[0.8]">
            Available credits
          </div>
          <div className="relative text-base leading-[24px] font-medium">
            222.10
          </div>
        </div>
      </div>
    </div>
  )
}

export default Walletcredits