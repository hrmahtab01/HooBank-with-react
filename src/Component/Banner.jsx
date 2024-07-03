import React, { useEffect, useState } from "react";
import bannerimg from "../assets/robot.png";
import { Percent } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";
import AOS from "aos";

const Banner = () => {
  const [count, Setcount] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative">
      <div className="max-w-container mx-auto ">
        <div className="flex  ">
          <div className="mt-44 mb-36 w-7/12 relative ">
            <div
              className="max-w-[408px] h-7 bg-[#11101D] rounded-md flex gap-2 items-center mb-4"
              data-aos="fade-down-left "
              data-aos-delay="300"
            >
              <h3 className="w-7 h-7 rounded-full bg-[#393939] text-[#00F6FF] ml-2">
                <Percent />
              </h3>
              <h2 className="text-[18px]">20% DISCOUNT FOR 1 MONTH ACCOUNT</h2>
            </div>
            <div>
              <div
                className="w-36 h-36 rounded-full border border-teal-500 flex flex-col justify-center items-center absolute right-8 text-lg font-medium"
                data-aos="fade-up-right "
                data-aos-delay="600"
              >
                <h4 className="flex gap-2 bg-gradient-to-r from-teal-700 to-teal-200 text-transparent bg-clip-text font-medium">
                  Get <MoveUpRight className="text-2xl text-white" />
                </h4>
                <span className="bg-gradient-to-r from-teal-700 to-teal-200 text-transparent bg-clip-text text-lg">
                  Started
                </span>
              </div>
              <h1
                data-aos="fade-up-right"
                data-aos-delay="200"
                className="flex flex-col  text-white text-7xl font-semibold space-y-3 gap-y-3 mb-10"
              >
                The Next
                <span className="bg-gradient-to-r from-teal-600 to-teal-100 text-transparent bg-clip-text">
                  Generation
                </span>
                <span>Payment Method.</span>
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="150"
                className=" flex flex-col text-[18px] max-w-[450px] line-clamp-3 space-y-3 gap-y-3 mt-10 "
              >
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </div>
          <div className="w-5/12 mt-14">
            <img data-aos="fade-up-right "
              data-aos-delay="600"
              className="max-w-screen-lg absolute right-0 max-h-[700px]"
              src={bannerimg}
              alt=""
            />
          </div>
        </div>
        <div className="mt-40 flex gap-10 items-center">
          <ScrollTrigger
            onEnter={() => Setcount(true)}
            onExit={() => Setcount(false)}
          >
            <div className="flex gap-4 items-center ">
              <h1 className="text-4xl font-semibold  ">
                {count && (
                  <CountUp start={0} end={3800} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2 className="bg-gradient-to-r from-green-700 to-teal-600 text-transparent bg-clip-text text-3xl font-normal">
                User Active
              </h2>
              <h3 className="text-3xl">।</h3>
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => Setcount(true)}
            onExit={() => Setcount(false)}
          >
            <div className="flex gap-4 items-center ">
              <h1 className="text-4xl font-semibold  ">
                {count && (
                  <CountUp start={0} end={230} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2 className="bg-gradient-to-r from-green-700 to-teal-600 text-transparent bg-clip-text text-3xl font-normal">
              TRUSTED BY COMPANY
              </h2>
              <h3 className="text-3xl">।</h3>
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => Setcount(true)}
            onExit={() => Setcount(false)}
          >
            <div className="flex gap-4 items-center ">
              <h1 className="text-4xl font-semibold  ">$
                {count && (
                  <CountUp start={0} end={3800} duration={2} delay={0} />
                )}
                M+
              </h1>
              <h2 className="bg-gradient-to-r from-green-700 to-teal-600 text-transparent bg-clip-text text-3xl font-normal">
              TRANSACTION
              </h2>
              
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Banner;
