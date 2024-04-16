import { ChevronRight } from "@mui/icons-material";
import React from "react";

const index = () => {
  return (
    <div className="bg-slate-100 py-[2rem]">
      {/* -------------------------------------------------------------------- */}
      <h1 className="flex justify-center text-2xl text-slate-800">
        For existing drivers
      </h1>
      <div className="flex justify-center place-items-center mx-[2rem] lg:flex-row flex-col lg:gap-3 gap-5 lg:w-[70rem] lg:mx-auto mt-5">
        <div className="flex flex-col gap-y-3 text-center border p-2 bg-[#fff] shadow-xl lg:w-[40rem]">
          <h1 className="text-xl font-bold">Become an instructor</h1>
          <p>
            Get a buzz from teaching? Kick start a rewarding career with
            tailor-made training options to suit your needs.
          </p>
          <button
            style={{
              background:
                "linear-gradient(360deg, rgba(253,200,0,1) 19%, rgba(255,255,255,1) 100%)",
            }}
            className="my-8 w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Train with us
          </button>
        </div>

        <div className="flex flex-col gap-y-3 text-center border p-2 bg-[#fff] shadow-xl lg:w-[40rem]">
          <h1 className="text-xl font-bold">Join our franchise</h1>
          <p>
            Get in the driving seat with the backing of our dedicated advice,
            local support team, and business management apps.
          </p>
          <button
            style={{
              background:
                "linear-gradient(360deg, rgba(253,200,0,1) 19%, rgba(255,255,255,1) 100%)",
            }}
            className="my-8 w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Franchise options
          </button>
        </div>

        <div className="flex flex-col gap-y-6 text-center border p-2 bg-[#fff] shadow-xl lg:w-[40rem]">
          <h1 className="text-xl font-bold">Electric vehicles</h1>
          <p>
            Teach the first generation of electric drivers with The AA Driving
            School.
          </p>
          <button
            style={{
              background:
                "linear-gradient(360deg, rgba(253,200,0,1) 19%, rgba(255,255,255,1) 100%)",
            }}
            className="my-8 w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Teach electric
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div className="bg-yellow-400 rounded-lg text-xl px-[2rem] grid lg:grid-cols-3 grid-cols-1 gap-y-7 mx-[2rem] lg:gap-2 md:divide-x lg:divide-x divide-y lg:divide-y-0 text-start divide-black mt-8 py-[2rem] lg:py-[4rem] lg:w-[70rem] lg:mx-auto">
        <div className="lg:ps-[3rem]">
          Over 1 million driving lessons delivered in 2019
        </div>
        <div className="lg:ps-[3rem]">
          99% of our pupils would recommend us*
        </div>
        <div className="lg:ps-[3rem]">
          75% of pupils passed with 40 hours of lessons or fewer
        </div>
      </div>

      {/* --------------------------------------------------------------------------- */}

      <div className="flex lg:w-[70rem] lg:mx-auto mt-6 lg:flex-row flex-col mx-[2rem]">
        <div
          style={{ backgroundImage: "url(/large-beam.png)" }}
          className="bg-no-repeat bg-center bg-cover gap-y-4 py-[2rem] flex flex-col justify-center place-items-center px-[2rem]"
        >
          <h1 className="text-2xl font-bold">Existing pupils</h1>
          <p className="text-center">
            Log in to your online account (registration takes two ticks) to get
            useful stuff done, like book lessons and access online
            <br /> learning materials.
          </p>

          <button
            style={{
              background:
                "linear-gradient(360deg, rgba(33,32,32,1) 62%, rgba(143,141,125,1) 100%)",
            }}
            className="my-5 text-white w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Log in to Driving School
          </button>
        </div>

        <div className="bg-[#fff] gap-y-4 py-[2rem] flex flex-col justify-center place-items-center px-[2rem]">
          <h1 className="text-2xl font-bold">Existing instructors</h1>
          <p className="text-center">
            Manage your business online and on the go with Hubcapp – our simple
            website and app for franchise instructors.
          </p>

          <button
            style={{
              background:
                "linear-gradient(360deg, rgba(253,200,0,1) 19%, rgba(255,255,255,1) 100%)",
            }}
            className="my-5 w-full lg:w-auto border hover:bg-gradient-to-b from-yellow-400 to-slate-50 drop-shadow-2xl shadow-yellow-600 p-3 font-bold tracking-wide rounded-md"
          >
            Login To Hubcab
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------- */}

      <div className="lg:w-[72rem] lg:mx-auto mx-[2rem] mt-5 flex justify-center text-[#21252d] bg-slate-200 p-[3rem] lg:py-[2rem]">
        <div className="flex flex-col gap-y-4 text-center">
          <h1 className="font-bold text-2xl">Get the Driving School app</h1>
          <p>
            It's free to download - all you need is an Apple or Android
            smartphone.
          </p>
          <div className="flex gap-x-2 justify-center flex-wrap lg:gap-y-0 gap-y-4">
            <img src="/android-app.png" alt="" />
            <img src="/ios-app.png" alt="" />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className="lg:w-[72rem] border lg:mx-auto mx-[2rem] mt-5 flex flex-col justify-center bg-white p-[3rem] lg:py-[2rem]">
        <div>
          <h1>More from The AA Driving School</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 divide-y lg:divide-y-0  lg:divide-x divide-slate-300 mt-5 lg:gap-2 gap-5">
          <ul className="flex flex-col gap-y-3 list-none font-bold text-blue-600">
            <li className="hover:underline">Driving lessons</li>
            <li className="hover:underline">Automatic driving lessons</li>
            <li className="hover:underline">Female driving instructors</li>
          </ul>

          <ul className="flex flex-col gap-y-3 list-none font-bold text-blue-600 lg:gap-2 lg:ps-[3rem] lg:pt-0 pt-[1rem]">
            <li className="hover:underline">Driving lessons</li>
            <li className="hover:underline">Automatic driving lessons</li>
            <li className="hover:underline">Female driving instructors</li>
          </ul>

          <ul className="flex flex-col gap-y-3 list-none font-bold text-blue-600 lg:gap-2 lg:ps-[3rem] lg:pt-0 pt-[1rem]">
            <li className="hover:underline">Driving lessons</li>
            <li className="hover:underline">Automatic driving lessons</li>
            <li className="hover:underline">Female driving instructors</li>
          </ul>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="lg:w-[70rem] lg:mx-auto flex lg:flex-row flex-col  mx-[2rem] lg:gap-y-0 gap-y-4 justify-center mt-5 divide-x divide-slate-300">
        <div className="flex flex-col py-[4rem] lg:mb-0 bg-[#fff] mb-[1rem] text-center lg:px-[5rem] lg:pe-[5rem]">
          <h1 className="text-xl px-2 lg:px-0">Need to add credit to your account?</h1>
          <button className="border shadow-lg ease-in duration-300 px-[2rem] py-[0.5rem] font-bold hover:bg-slate-200 border-2 border-slate-800 mt-5  mx-auto rounded-lg">
            Top up
          </button>
        </div>
        <div className="flex flex-col py-[4rem] bg-[#fff] text-center lg:px-[5rem] lg:ps-[5rem]">
          <h1 className="text-xl px-2 lg:px-0">Have a question about learning to drive?</h1>
          <button className="border shadow-lg ease-in duration-300 px-[2rem] py-[0.5rem] font-bold hover:bg-slate-200 border-2 border-slate-800 mt-5  mx-auto rounded-lg">
            Chat Now
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}
      <div className="lg:w-[70rem] lg:mx-auto flex flex-col justify-center place-items-center mt-[5rem]">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Connect with us</h1>
        </div>
        <div className="flex gap-x-2 mt-2">
          <img src="/twitter-2.webp" alt="" />
          <img src="/facebook-2.webp" alt="" />
          <img src="/instagram-2.webp" alt="" />
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="h-[1px] bg-slate-800 w-auto mt-[4rem]" />
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="lg:w-[70rem] lg:mx-auto mt-8">
        <div className="flex ms-4">
          <span className="text-blue-500 font-bold">Home <ChevronRight/></span>
          <p>AA Driving School</p>
        </div>
      </div>
    </div>
  );
};

export default index;
