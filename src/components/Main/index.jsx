import React from "react";
import { useState, useEffect } from "react";

const index = () => {
  const [hidden, setHidden] = useState(window.innerWidth > 1152 ? true : false);
  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth > 1152 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(/${
          hidden
            ? "pupil-instructor-hero-6-desktop.jpg"
            : "pupil-instructor-hero-6-mobile.jpg"
        })`,
      }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="flex flex-col gap-y-2 lg:gap-y-4 lg:w-[70rem] lg:mx-auto lg:pb-0 lg:pt-[4rem] pb-[50rem] pt-[5rem] mx-[4rem]">
        <p>DRIVING SCHOOL</p>
        <h2 className="lg:text-[3rem] text-[2rem] font-bold text-slate-900">
          Getting you on the road
        </h2>
        <p className="lg:text-xl text-lg text-slate-900">
          Ready to start driving? You're in safe hands.
          <br /> Find out more and book online.
        </p>
        <p>
          <button
            
            className="my-8 button w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Get Lesson Prices
          </button>
        </p>
      </div>
    </div>
  );
};

export default index;
