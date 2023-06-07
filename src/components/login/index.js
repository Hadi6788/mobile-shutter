import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
    <div className="mt-[30px] lg:w-[40%] lg:px-[15px] md:px-7 px-4">
      <div className="">
        <div className="grid grid-cols-2  ">
          <div>
            <h1 className="text-[30px] mb-10 px-3 font-[Roboto]  ">login</h1>
          </div>
          <div className="mt-4 ">
            <a
              href="#"
              class="text-red-500 underline hover:text-red-600 hover:no-underline hover:border-b-2 hover:border-red-600 mt-10 text-[14px] tracking-wider px-[20px] uppercase text-end"
            >
              <Link to="/account">
              Create an Account
              </Link>
            </a>
          </div>
        </div>

        <div class="border border-[#d3ced2]  px-10 rounded-[10px]   ">
          <form className=" rounded pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                className="block   text-[#888688] text-sm font-bold mb-2"
                for="username text-[yellow]"
              >
                Username or email address <span className="text-[red]">*</span>
              </label>

              <input
                className="border rounded  py-2  w-[100%]  focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                class="block text-sm font-bold mb-2 text-[#888688]  "
                for="password"
              >
                Password <span className="text-[red]">* </span>
              </label>
              <input
                className="border rounded  py-2  w-[100%] focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>

            <div>
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-[#888688]  dark:text-gray-300 "
                >
                  Remember me
                </label>
              </div>
              <div class="flex justify-center">
                <button class="w-full py-3  text-white text-lg  bg-red-600">
                  Login
                </button>
              </div>
              <p className="text-red-600 pt-7">Lost your password?</p>
            </div>
          </form>
        </div>
      </div>

  
    </div>
    </>
  );
};

export default Login;
