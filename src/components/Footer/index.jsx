import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-[#404040] py-[2rem] ">
        <ul className="lg:w-[82rem] lg:mx-auto text-white lg:text-center ps-5 grid lg:grid-cols-10 grid-cols-1 lg:divide-y-0 divide-y  lg:divide-x divide-slate-600 mt-5 lg:gap-2 gap-6 flex-wrap flex">
          <li>
            <a className="my-auto cursor-pointer hover:underline">About us</a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">
              Gender pay gap
            </a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">Contact us</a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">Apps</a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">Careers</a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">
              Modern slavery
            </a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">
              Terms of use
            </a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">
              Privacy notices
            </a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">
              Privacy hub
            </a>
          </li>
          <li>
            <a className="my-auto cursor-pointer hover:underline">Cookies</a>
          </li>
        </ul>
      </div>
      <div className="bg-[#262626] py-[1rem] ">
        <div className="lg:w-[70rem] lg:mx-auto text-end text-zinc-400 me-6">
        <p>© Automobile Association Developments Ltd.</p>
        </div>
      </div>
    </>
  );
};

export default index;
