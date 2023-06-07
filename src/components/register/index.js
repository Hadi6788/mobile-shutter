import React from "react";

const Register = () => {
  return (
   <>
    <div className="mt-[30px] lg:w-[40%]   px-[15px]">
        <div>
          <h1 className="text-[30px] mb-10 px-3 font-[Roboto]"> Register</h1>
          <div class="border border-[#d3ced2]  px-10 rounded-[10px] ">
            <form className=" rounded pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  className="block   text-[#888688] text-sm font-bold mb-2"
                  for="username text-[yellow]"
                >
                  Email address<span className="text-[red]"> * </span>
                </label>

                <input
                  className="border rounded  py-2  w-[100%] focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-6">
                <label
                  class="block text-sm font-bold mb-2 text-[#888688]"
                  for="password"
                >
                  Password <span className="text-[red]">* </span>
                </label>
                <input
                  className="border rounded  py-2 w-[100%] focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>

              <div>
                <div class="flex justify-center">
                  <button class="w-full py-3 text-white  bg-red-600 ">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        
      </div>
   </>
  );
};

export default Register;
