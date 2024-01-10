import React from "react";

const Howitswork = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[6px] text-left text-xs text-black-30 font-body-2-medium">
      <img
        className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/questionblack.png"
      />
      <div className="relative leading-[16px]">How it works</div>
    </div>
  );
};

export default Howitswork;
