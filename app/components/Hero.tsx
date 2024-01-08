import { hero, heroMobile } from "@/public/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-16 bg-gray-1">
      <div className="flex flex-col mx-4">
        <h1 className="text-black font-extrabold text-4xl mt-6 mb-2">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="text-sm mb-4 text-gray-400">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          className="w-full rounded-full bg-black text-gray-300
          p-4 mx-auto justify-center"
        >
          Shop Now
        </button>
        <div className="flex items-center gap-10 mx-auto mt-4 mb-4">
          <div className="">
            <h2 className="text-2xl font-bold items-end">200+</h2>
            <p className="text-sm text-gray-400">International Brands</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">2,000+</h2>
            <p className="text-sm text-gray-400">High Quality Products</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-2xl font-bold">30,000+</h2>
          <p className="text-sm text-gray-400">Happy Customers</p>
        </div>
      </div>
      <div>
        <Image src={hero} alt="hero" className="hidden" />
        <Image src={heroMobile} alt="hero" className="md:hidden" />
        <div
          className="flex flex-col justify-center items-center text-white 
          bg-black h-28"
        >
          <div className="flex gap-4 mb-2">
            <h2 className="text-3xl">VERSACE</h2>
            <h2 className="text-3xl">ZARA</h2>
            <h2 className="text-3xl">GUCCI</h2>
          </div>
          <div className="flex gap-4">
            <h2 className="text-3xl">PRADA</h2>
            <h2 className="text-3xl">Calvin Klein</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
