import React from "react";
import { GrDeliver } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { GiReturnArrow } from "react-icons/gi";

const FreeDevilery = () => {
  return (
    <div className="bg-[#F1F3F8]  py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center md:justify-between justify-center
     text-center lg:text-start container mx-auto">
  <div className=" items-center gap-4 mb-3 sm:mb-0 sm:w-auto lg:flex ">
    <span className="">
      <GrDeliver className="h-[40px] w-[40px] mx-auto" />
    </span>
    <span className="">
      <h2 className="text-[16px] font-[700]">Free Delivery</h2>
      <span className="text-[16px] font-[500] text-gray-400">
        Free shipping over $100
      </span>
    </span>
  </div>
  <div className=" items-center gap-4 mb-3 sm:mb-0 sm:w-auto lg:flex">
    <span className="">
      <GiReturnArrow className="h-[40px] w-[40px] mx-auto" />
    </span>
    <span className="">
      <h2 className="text-[16px] font-[700]"> Free Return</h2>
      <span className="text-[16px] font-[500] text-gray-400">
        Free return over $100
      </span>
    </span>
  </div>
  <div className=" items-center gap-4 mb-3 sm:mb-0 sm:w-auto lg:flex">
    <span className="">
      <Ri24HoursFill className="h-[40px] w-[40px] mx-auto" />
    </span>
    <span className="">
      <h2 className="text-[16px] font-[700]">Customer Support</h2>
      <span className="text-[16px] font-[500] text-gray-400">
        Friendly 24/7 customer support
      </span>
    </span>
  </div>
  <div className=" items-center gap-4 sm:w-auto lg:flex">
    <span className="">
      <TiTickOutline className="h-[40px] w-[40px] mx-auto" />
    </span>
    <span className="">
      <h2 className="text-[16px] font-[700]">Money Back Guarantee</h2>
      <span className="text-[16px] font-[500] text-gray-400">
        Quality checked by our team
      </span>
    </span>
  </div>
</div>

  );
};

export default FreeDevilery;
