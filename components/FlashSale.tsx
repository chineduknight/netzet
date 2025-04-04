import React from "react";

const FlashSale = () => {
  return (
    <div className="w-full ">
      <p
        className="text-center text-white font-bold  text-base  lg:text-[22px] md:text-[18px]   p-2"
        style={{
          fontFamily: "var(--font-figtree)",
          background: "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
        }}
      >
        <span className="text-[#00E7F9] font-extrabold">
          🚀 FRESH BEGINNINGS SALE:{" "}
        </span>
        Extra 25% OFF, Limited Spots - start your journey today!
      </p>
    </div>
  );
};

export default FlashSale;
