import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";
import { BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import FreeDevilery from "../freedevivery/index.js"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="bg-[#222222] ">
        {/* navbar for  large   screens */}
        <div className="md:flex hidden items-center py-4  justify-between container mx-auto">
          <div className="text-[#F02757] lg:text-[30px] text-[16px] font-mono font-[900]">
            <span className="text-white">Mobile</span>Shutter
          </div>

          <div class="flex flex-col sm:flex-row md:hidden lg:flex items-center sm:px-1 sm:py-1 space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          
            <div class="flex bg-gray-100  sm:w-72  w-full gap-1 items-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                class="bg-gray-100 outline-none text-[15px]"
                type="text"
                placeholder="Article name or keyword..."
              />
            </div>
            <div class="flex rounded-lg text-gray-500 font-semibold cursor-pointer items-center gap-2">
              <span class="text-[14px]">All categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>

          {/* navbar 3rd section */}

          <div>
            <div className="text-white flex items-center gap-2">
              <span className="text-[14px]">English</span>
              <AiOutlineDown className="w-4 h4" />
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div>
              <Link to="/loginPage"> <CgProfile color="white" className="w-6 h-6" /></Link>
             
            </div>
            <div className="flex items-start relative">
              <BsSuitHeart color="white" className="w-6 h-6" />
              <span className="text-white absolute -top-2 left-7"> 0</span>
            </div>
            <div className="flex items-start relative">
              <BsMinecartLoaded color="white" className="w-6 h-6" />
              <span className="text-white absolute -top-2 left-7"> 0</span>
            </div>
          </div>
        </div>
        {/* navbar for  smalls   screens */}

        <div className="md:hidden flex items-center p-6 lg:justify-around justify-between">
          <AiOutlineMenuFold className="w-6 h-6" color="white" />

          <div className="text-[#F02757] lg:text-[30px] text-[16px] font-mono font-[900]">
            <span className="text-white">Mobile</span>Shutter
          </div>

          {/* navbar 3rd section */}

          <div className="flex items-center gap-[30px]">
            <div className="flex items-start relative">
              <BsMinecartLoaded color="white" className="w-6 h-6" />
              <span className="text-white absolute -top-2 left-7"> 0</span>
            </div>
          </div>
        </div>
        {/* shop by categories */}
        <div className="bg-slate-300  w-full h-[1px] divide-gray-300"></div>

        <div class="text-white bg-[#222222] md:flex hidden justify-between  container mx-auto items-center">
          <div className=" flex lg:gap-[30px] items-center justify-between gap-[5px]">
            <span className=" md:text-base lg:text-[20px] text-white font-[700]">
              Shop by categories
            </span>
            <AiOutlineMenuFold className="w-6 h-6" color="white" />
            <span>
              <RxDividerVertical className="w-6 h-14" color="white" />
            </span>
          </div>
          <div>
            <ul className="flex  items-center p-5">
              <Link to="/" className="px-5 text-[14px] font-semibold">
                HOME
              </Link>
              <Link to="/about" className="px-5 text-[14px] font-semibold">
                ABOUT
              </Link>
              <Link to="/shop" className="px-5 text-[14px] font-semibold">
                SHOP
              </Link>
              <Link to="/faqs" className="px-5 text-[14px] font-semibold">
                FAQS
              </Link>
              <Link to="/contact" className="px-5 text-[14px] font-semibold">
                CONTACT US
              </Link>
            </ul>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center text-[14px] font-normal lg:gap-2">
              <span>Need help? Call Us: </span>
              <span className="text-[#DC2828]">+84 2500 888 33</span>
            </div>
          </div>
        </div>

      </div>
        <FreeDevilery/>
    </>
  );
};

export default Navbar;
