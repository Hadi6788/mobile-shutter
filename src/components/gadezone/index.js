import React from "react";
import bg1 from "../img/menimg.png";
import mobile1 from "../img/mobile.png";

const Gadezone =()=>{
  return (
    <>
<div className=" container mx-auto  lg:grid-cols-2  md:grid md:grid-cols-1  md:gap-8">
{/* frist div start */}
<div className=" grid grid-cols-2 bg-[#DEE4D2] gap-8 py-[20px]  border rounded-[12px]">
  <div className="px-3">
    <img src={bg1} />
  </div>
  <div className="pt-6">
    <button class=" border border-gray-200 py-2 lg:px-5 md:px-4 px-3 bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white text-[20px] leading-[23px] uppercase  ">
      GADGET ZONE
    </button>
    <h2 className="pt-7 text-[#000000] text-[20px] leading-[23px] uppercase  ">
      TAKE YOUR TRIP TO YOUR VIRTUAL WORLD
    </h2>
    <p className="pt-2">
      <a href="#" class="underline hover:no-underline pt-1">
        Shop now
      </a>
    </p>
  </div>
</div>
{/* frist dev end */}

{/* second div start */}

<div className=" bg-[#B9DCF1] grid grid-cols-2  mt-[20px] lg:mt-0  py-6 border  rounded-[12px] lg:gap-[20px] md:gap-[10px]  ">
  <div className=" px-3">
    <img src={mobile1} />
  </div>
  <div>
    <div className="">
      <button class="lg:px-5 md:px-4 px-3     border border-gray-200 py-2  bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white mt-5 text-[20px] leading-[23px] uppercase ">
        NEW ARRIVAL
      </button>
    </div>
    <h1 className="  pt-5 text-centerq text-[20px] leading-[23px] uppercase ">
      REDMI <br /> NOTE 10S
    </h1>
    <p className="pt-2">
      <a href="#" class="underline hover:no-underline ">
        Shop now
      </a>
    </p>
  </div>
</div>

{/* second div end */}
</div>
    </>
  )
}
export default Gadezone


//   return (
//     <div className=" px-[20px]  mt-[100px] lg:grid-cols-2  md:grid md:grid-cols-1  md:gap-8">
//       {/* frist div start */}
//       <div className=" grid grid-cols-2 bg-[#DEE4D2] gap-8 py-[20px]  border rounded-[12px]">
//         <div className="px-3">
//           <img src={bg1} />
//         </div>
//         <div className="pt-6">
//           <button class=" border border-gray-200 py-2 lg:px-5 md:px-4 px-3 bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white text-[20px] leading-[23px] uppercase  ">
//             GADGET ZONE
//           </button>
//           <h2 className="pt-7 text-[#000000] text-[20px] leading-[23px] uppercase  ">
//             TAKE YOUR TRIP TO YOUR VIRTUAL WORLD
//           </h2>
//           <p className="pt-2">
//             <a href="#" class="underline hover:no-underline pt-1">
//               Shop now
//             </a>
//           </p>
//         </div>
//       </div>
//       {/* frist dev end */}

//       {/* second div start */}

//       <div className=" bg-[#B9DCF1] grid grid-cols-2  mt-[20px] lg:mt-0  py-6 border  rounded-[12px] lg:gap-[20px] md:gap-[10px]  ">
//         <div className=" px-3">
//           <img src={mobile1} />
//         </div>
//         <div>
//           <div className="">
//             <button class="lg:px-5 md:px-4 px-3     border border-gray-200 py-2  bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white mt-5 text-[20px] leading-[23px] uppercase ">
//               NEW ARRIVAL
//             </button>
//           </div>
//           <h1 className="  pt-5 text-centerq text-[20px] leading-[23px] uppercase ">
//             REDMI <br /> NOTE 10S
//           </h1>
//           <p className="pt-2">
//             <a href="#" class="underline hover:no-underline ">
//               Shop now
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* second div end */}
//     </div>
//   );
// };

// export default Gadezone;
