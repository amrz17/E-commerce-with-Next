import { heroMobile } from "@/public/images";
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center">
        <h1 className="p-4 text-4xl font-extrabold">NEW ARRIVALS</h1>
      </div>
      <div className="carousel carousel-end gap-x-6">
        <div className="carousel-item flex flex-col">
          <Image
            src={heroMobile}
            width={250}
            alt="Drink"
            className="rounded-box"
          />
          <h2 className="text-lg font-bold mt-1">T-shirt with Tape Details</h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <span className="ml-2">4/5</span>
          </div>
          <h2 className="text-2xl font-bold pt-2">$120</h2>
        </div>
        <div className="carousel-item flex flex-col">
          <Image
            src={heroMobile}
            width={250}
            alt="Drink"
            className="rounded-box"
          />
          <h2 className="text-lg font-bold mt-1">T-shirt with Tape Details</h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-300"
            />
            <span className="ml-2">4/5</span>
          </div>
          <h2 className="text-2xl font-bold pt-2">$120</h2>
        </div>
      </div>
      <div className="flex items-center my-6">
        <button className="mx-auto btn btn-outline w-[340px] rounded-full">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
