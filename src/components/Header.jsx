// components/Header.js
import React from 'react';
import { FaQuestion, FaSearch, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
<div className="dashboardHeaderContainer">
  <div className="flex items-center justify-between bg-gray-700 text-white p-4">
    <div className="flex items-center">
      <div className="text-2xl font-bold">Payments</div>
      <div className="flex items-center ml-4">
        <FaQuestion size={20} className="mr-2" />
        <div className="text-sm">How it works</div>
      </div>
    </div>

    <div className="flex items-center">
      <FaSearch size={20} className="mr-2" />
      <div className="text-sm">Search features, tutorials, etc.</div>
    </div>

    <div className="flex items-center">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full">
          {/* Add Ellipse styling */}
        </div>
        <FaBars size={20} className="ml-2" />
      </div>
      <FaBars size={20} className="ml-4" />
    </div>
  </div>
</div>

  );
};

export default Header;
