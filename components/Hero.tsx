import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const discovery = [
    { title: "Start growing your influence right away—no waiting required!" },
    {
      title:
        "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    { title: "Use a Personal AI Worker to boost your content" },
    {
      title: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className="flex p-4">
      <div className="relative flex flex-col-reverse md:flex-row lg:flex-row justify-center item-center  ">
        <div className="w-full md:w-1/2 lg:w-2/3  pt-10 pb-20 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
          <h1
            className="text-2xl md:text-3xl w-[300px]  m-auto md:w-auto lg:text-4xl xl:text-[35px] font-bold text-white mb-4 text-center md:text-left leading-tight "
            style={{
              fontFamily: "var(--font-urbanist)",
            }}
          >
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2
            className="text-2xl md:text-3xl w-[350px]  m-auto md:w-auto lg:text-4xl xl:text-[35px] font-bold text-[#00E7F9] mb-8 text-center md:text-left leading-tight font-urbanist"
            style={{
              textShadow: "2px 2px 0px #FC004E",
              fontFamily: "var(--font-urbanist)",
            }}
          >
            Discover your way to success with Fametonic:
          </h2>
          <div className="text-white mb-8 space-y-2">
            {discovery.map((item, index) => (
              <p
                key={index}
                className="text-base md:font-semibold flex items-center font-figtree"
                style={{
                  fontFamily: "var(--font-figtree)",
                }}
              >
                <span className="pr-2.5 text-2xl">✨</span> {item.title}
              </p>
            ))}
          </div>

          {/* Mobile Disclaimer */}
          <div className="block md:hidden mb-8">
            <p
              className="text-[#ABABAB] text-xs text-center font-medium mb-4 max-w-md mx-auto"
              style={{
                fontFamily: "var(--font-figtree)",
              }}
            >
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p
              className="text-[#ABABAB] text-[10px] text-center font-medium"
              style={{
                fontFamily: "var(--font-figtree)",
              }}
            >
              Fametonic 2025 © All Rights Reserved.
            </p>
          </div>

          <button
            className="bg-[#FC004E]  hover:bg-[#d1003f] text-white text-lg font-bold py-3 px-8 lg:py-0 rounded-xl w-full h-[40px] lg:w-[313px]  transition duration-300 flex items-center justify-center"
            style={{
              boxShadow: "2px 2px 10px 0px #00E7F9",
              fontFamily: "var(--font-figtree)",
            }}
          >
            GET STARTED
            <span className="ml-2">
              <IoIosArrowForward size={20} color="#FFF" />
            </span>
          </button>
          <p
            className="text-white text-center md:text-left md:ml-8 font-normal leading-tight text-xs mt-3 pl-4 font-figtree"
            style={{
              fontFamily: "var(--font-figtree)",
            }}
          >
            1-minute quiz for personalized insights
          </p>

          {/* Desktop Disclaimer */}
          <div className="hidden md:block mt-8">
            <p
              className="text-[#ABABAB] text-xs font-medium max-w-md"
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
              Fametonic 2025 © All Rights Reserved.
            </p>
          </div>
        </div>

        <Image
          src="/assets/heroimg.png"
          alt="smartphone showing Fametonic app interface with statistics"
          width={666}
          height={623}
          className="md:absolute md:top-[-50px] md:right-[-450px] md:z-[-1]"
        />
      </div>
    </div>
  );
};

export default Hero;
