import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={170}
        height={72}
        className="md:h-[74px] md:w-[173.12px] w-[105px] h-[44px]"
      />
    </div>
  );
};

export default Logo;
