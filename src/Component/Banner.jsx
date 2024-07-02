import React from "react";
import bannerimg from "../assets/robot.png";
import { Percent } from "lucide-react";
import { MoveUpRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="max-w-container mx-auto ">
        <div className="flex relative  ">
          <div className="mt-44 mb-36 w-7/12 relative">
            <div className="max-w-[408px] h-7 bg-[#11101D] rounded-md flex gap-2 items-center mb-4">
              <h3 className="w-7 h-7 rounded-full bg-[#393939] text-[#00F6FF] ml-2">
                <Percent />
              </h3>
              <h2 className="text-[18px]">20% DISCOUNT FOR 1 MONTH ACCOUNT</h2>
            </div>
            <div>
                <div className="w-36 h-36 rounded-full border border-teal-500 flex flex-col justify-center items-center absolute right-8 text-lg font-medium">
                    <h4 className="flex gap-2 bg-gradient-to-r from-teal-700 to-teal-200 text-transparent bg-clip-text font-medium">Get <MoveUpRight className="text-2xl text-white"/></h4>
                    <span className="bg-gradient-to-r from-teal-700 to-teal-200 text-transparent bg-clip-text text-lg">Started</span>

                </div>
              <h1 className="flex flex-col  text-white text-7xl font-semibold space-y-3 gap-y-3 mb-10">
                The Next
                <span className="bg-gradient-to-r from-teal-600 to-teal-100 text-transparent bg-clip-text">
                  Generation
                </span>
                <span>Payment Method.</span>
              </h1>
              <p className=" flex flex-col text-[18px] max-w-[450px] line-clamp-3 space-y-3 gap-y-3 ">
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </div>
          <div className="w-5/12 mt-14">
            <img
              className="max-w-screen-lg absolute -right-26 max-h-screen"
              src={bannerimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
