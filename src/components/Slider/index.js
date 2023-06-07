import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
// import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const Slider = () => {
  return (
    <>
      <div className="">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <div className="items-center flex-col">
              <div className="w-[100%] h-[500px] bg-[url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')] bg-cover bg-center">
                <div className="w-full h-full  text-center items-center backdrop-brightness-48">
                  <h1 className="text-white text-4xl text-center pt-[150px]  align-center">
                    Unleash your potential with mobile technology.
                  </h1>
                  <h3 className="text-center text-white text-[25px] leading-[30px] pt-3 px-7">
                    Mobile tech has transformed our interactions, offering
                    endless opportunities for growth via smartphones & tablets'
                    access to tools/resources.{" "}
                  </h3>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="items-center flex-col">
              <div className="w-[100%] h-[500px] bg-[url('https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center">
                <div className="w-full h-full  text-center items-center backdrop-brightness-48">
                  <h1 className="text-white text-4xl text-center pt-[150px]">
                    Powerful beyond imagination
                  </h1>
                  <h3 className="text-center text-white text-[25px] leading-[30px] pt-3 px-7">
                    Mobile tech has transformed our interactions, Mobile
                    technology is a powerful tool that exceeds our imagination,
                    offering endless possibilities to connect, learn, and
                    create.
                  </h3>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="items-center flex-col">
              <div className="w-[100%] h-[500px] bg-[url('https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] bg-cover bg-center">
                <div className="w-full h-full  text-center items-center backdrop-brightness-48">
                  <h1 className="text-white text-4xl text-center pt-[150px]">
                    Innovation at your fingertips
                  </h1>
                  <h3 className="text-center text-white text-[25px] leading-[30px] pt-3 px-7">
                    Mobile tech has transformed our interactions, Mobile tech
                    offers innovative tools to connect, collaborate & bring
                    ideas to life, empowering progress and creativity for all.
                  </h3>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
