import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Account = () => {
  return (

    <div className=" flex justify-end gap-5">
      {/* Store Image and Name */}

      <div className="flex-1">
        <img
          className="relative w-12 h-12 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/Navbar/nishyan.png"
        />
      </div>

      <div className="flex-2 ">
        <div>
          <p className="text-xl font-bold">Nishyan</p>
        </div>
        <div>
          {/* Visit Store Link */}
          <a
            href="#"
            className="text-[white] relative [text-decoration:underline] leading-[24px] font-small"
          >
            Visit store
          </a>
        </div>
      </div>

      <RiArrowDropDownLine className="cursor-pointer" size={50} />
    </div>
  );
};

export default Account;
