import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaNoteSticky } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { GiBuyCard } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";

import { Link } from "react-router-dom";
import { useState } from "react";
import Walletcredits from "./Walletcredits";

const Sidebar = ({ onToggleComponent }) => {
  const menu = [
    { name: "Home", link: "/Home", icon: "/Navbar/home.png" },

    {
      name: "Orders",
      link: "/Orders",
      icon: "/Navbar/orders.png" /* Your icon component for navbaricon_Two */,
    },
    {
      name: "Products",
      link: "/Products",
      icon: "/Navbar/products.png" /* Your icon component for navbaricon_Three */,
    },
    {
      name: "Delivery",
      link: "/Delivery",
      icon: "/Navbar/deliverly.png" /* Your icon component for user */,
    },
    {
      name: "Marketing",
      link: "/Marketing",
      icon: "/Navbar/marketing.png" /* Your icon component for Marketing */,
    },

    {
      name: "Analytics",
      link: "/Analytics",
      icon: "/Navbar/analytics.png" /* Your icon component for navbaricon_Four */,
    },
    {
      name: "Payouts",
      link: "/Payouts",
      icon: "/Navbar/payouts.png" /* Your icon component for navbaricon_Five */,
    },
    {
      name: "Discounts",
      link: "/Discounts",
      icon: "/Navbar/discounts.png" /* Your icon component for navbaricon_Seven */,
    },
    {
      name: "Audience",
      link: "/Audience",
      icon: "/Navbar/audience.png" /* Your icon component for navbaricon_Eight */,
    },
    {
      name: "Appearance",
      link: "/Appearance",
      icon: "/Navbar/apperence.png" /* Your icon component for navbaricon_Nine */,
    },
    {
      name: "Plugins",
      link: "/Plugins",
      icon: "/Navbar/plugins.png" /* Your icon component for Plugins */,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <aside className="w-64 bg-gray-800 text-white">
      {/* for Desktop */}
      <div className="hidden md:block">
        <div
          className={`bg-colorgrey min-h-fit ${
            open ? "w-50" : "w-20"
          } duration-500 text-grey-100 px-4 py-4 rounded-xl shadow`}
        >
          <div className="py-3 flex justify-end">
            <RiArrowDropDownLine
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="mt-2 flex flex-col gap-1 relative">
            {menu?.map((menu, i) => (
              <Link
                onClick={() => onToggleComponent(menu?.name)}
                to={menu?.link}
                key={i}
                className={`flex items-center text-md gap-2.5 font-medium p-2 hover:bg-colorskin rounded-sm`}
              >
                <img
                  src={menu?.icon}
                  alt={menu?.name}
                  style={{ width: "20px", height: "20px" }}
                />
                <h2
                  className={`whitespace-pre duration-500 text-sm ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>

    

        </div>
      </div>
      <Walletcredits/>
    </aside>
  );
};

export default Sidebar;
