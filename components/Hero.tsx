import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const discovery = [
    { title: "Start growing your influence right away—no waiting required!" },
    {
      title:
        "Create viral TikToks and Reels step by step with easy-to-follow\n lessons",
    },
    { title: "Use a Personal AI Worker to boost your content" },
    {
      title: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className="flex  ">
      <div className="relative flex flex-col-reverse md:flex-row lg:flex-row items-center  px-4 md:px-16 lg:px-32 max-w-7xl  xl:mx-[120px] ">
        <div className="w-full md:w-1/2 lg:w-2/3 z-10 pt-10 pb-20 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
          <h1
            className="text-[25px] md:text-2xl font-urbanist lg:text-3xl xl:text-[35px] font-bold text-white mb-4 text-center md:text-left leading-[1.2]"
            style={{
              fontFamily: "var(--font-urbanist)",
            }}
          >
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h1
            className="text-[25px] md:text-2xl lg:text-3xl xl:text-[35px] md:text-start text-center font-bold text-[#00E7F9] mb-8  "
            style={{
              textShadow: "2px 2px 0px #FC004E",
              lineHeight: "1.2",
              fontFamily: "var(--font-urbanist)",
            }}
          >
            Discover your way to success with Fametonic:
          </h1>
          <div className="text-white mb-8">
            {discovery.map((item, index) => (
              <p
                key={index}
                className="md:text-base md:font-semibold mb-4 flex"
                style={{
                  fontFamily: "var(--font-figtree)",
                }}
              >
                <span className="pr-2.5 text-2xl">✨</span> {item.title}
              </p>
            ))}
          </div>
          <div className="block md:hidden ">
            <p className="text-[#ABABAB] text-xs text-center  font-medium mb-8 max-w-[516px] ml-6">
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="text-[#ABABAB] text-[10px] text-center font-medium mb-8">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>

          <button
            className="bg-[#FC004E] hover:bg-[#d1003f] text-white text-[20px]  font-bold justify-center py-3 px-8 rounded-xl w-full md:w-[270px] lg:w-[333px] transition duration-300 flex items-center shadow-lg"
            style={{
              boxShadow: "2px 2px 10px 0px #00E7F9",
              fontFamily: "var(--font-figtree)",
              width: "313px",
            }}
          >
            GET STARTED
            <span className="ml-2">
              <FaChevronRight size={14} color="#FFF" />
            </span>
          </button>
          <p
            className="text-white font-normal leading-[16px] text-xs mt-3 pl-12"
            style={{
              fontFamily: "var(--font-figtree)",
            }}
          >
            1-minute quiz for personalized insights
          </p>

          <div className="hidden md:block">
            <p
              className="text-[#ABABAB] text-xs font-medium mt-8 max-w-[350px] lg:max-w-[516px]"
              style={{
                fontFamily: "var(--font-figtree)",
              }}
            >
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p
              className="text-[#ABABAB] text-[10px] font-medium mt-3"
              style={{
                fontFamily: "var(--font-figtree)",
              }}
            >
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>

        <Image
          src="/assets/heroimg.png"
          alt="smartphone showing Fametonic app interface with statistics"
          width={866}
          height={823}
          className="md:absolute md:top-[-100px] md:right-[-360px] md:z-[-1]"
        />
      </div>
    </div>
  );
};

export default Hero;
