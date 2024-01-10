import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";


const Sidebaritems = ({ onToggleComponent }) => {
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
    <div>
      {/* for Desktop */}
      <div className="hidden md:block">
        <div className="bg-colorgrey min-h-fit  w-50">
          

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
                <h2 className="whitespace-pre duration-500 text-sm">
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebaritems;
