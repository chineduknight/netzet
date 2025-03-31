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
    { title: "Use a Personal AI Worker to boost your content " },
    {
      title: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <div className="relative flex flex-col-reverse md:flex-row lg:flex-row items-center px-8 md:px-16 lg:px-32 max-w-7xl  xl:mx-[120px] ">
      {/* Text content - will be below image on mobile, left side on tablet and desktop */}
      <div className="w-full md:w-1/2 lg:w-2/3 z-10 pt-10 pb-20 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
        <h1 className="text-[25px] md:text-start text-start md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 md:pl-0  pl-[30px]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h1
          className="text-[25px] md:text-2xl lg:text-3xl xl:text-4xl md:text-start text-center font-bold text-[#00E7F9] mb-8  "
          style={{ textShadow: "2px 2px 0px #FC004E" }}
        >
          Discover your way to success with Fametonic:
        </h1>
        <div className="text-white mb-8">
          {discovery.map((item, index) => (
            <p key={index} className="md:text-base font-semibold mb-4 flex">
              <span className="pr-2.5 text-2xl">✨</span> {item.title}
            </p>
          ))}
        </div>
        {/* Terms and copyright for mobile - will appear before button */}
        <div className="block md:hidden ">
          <p className="text-[#ABABAB] text-xs text-center  font-medium mb-8 max-w-[516px] ml-6">
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="text-[#ABABAB] text-[10px] text-center font-medium mb-8">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>

        {/* Button and quiz text */}
        <button
          className="bg-[#FC004E] hover:bg-[#d1003f] text-white text-[20px]  font-bold justify-center py-3 px-8 rounded-xl w-full md:w-[270px] lg:w-[333px] transition duration-300 flex items-center shadow-lg"
          style={{ boxShadow: "0 6px 17px rgba(0, 231, 249, 0.5)" }}
        >
          GET STARTED{" "}
          <span className="ml-2">
            <FaChevronRight size={20} color="#FFF" />
          </span>
        </button>
        <p className="text-white font-normal leading-[16px] text-xs mt-3 pl-12">
          1-minute quiz for personalized insights
        </p>

        {/* Terms and copyright for tablet/desktop */}
        <div className="hidden md:block">
          <p className="text-[#ABABAB] text-xs font-medium mt-8 max-w-[350px] lg:max-w-[516px]">
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="text-[#ABABAB] text-[10px] font-medium mt-3">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
      {/* Image section - top on mobile, right side on tablet and desktop */}
      <div className="w-full md:w-1/2 lg:w-1/2 lg:relative h-full">
        <Image
          src="/assets/heroimg.png"
          width={666}
          height={679}
          alt="smartphone showing Fametonic app interface with statistics"
          className="lg:ml-[-67px]  md:h-[500px]  lg:h-[620px]  rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
