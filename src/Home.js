import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-home-mobile min-h-screen bg-cover bg-center sm:bg-home-tablet lg:bg-home-desktop overflow-hidden">
      <Nav />
      <div className="sm:px-[5rem] px-5 lg:grid grid-cols-2 ">
        <div className="lg:mt-[15rem]">
          <p className="text-[#D0D6F9] text-center mt-10 sm:text-xl lg:text-left">
            SO , YOU WANT TO TRAVEL TO
          </p>
          <p className="text-center text-white text-8xl pt-6 pb-10 sm:text-[8rem] sm:pb-6 lg:text-left">
            SPACE
          </p>
          <p className="text-center text-[#D0D6F9] text-[16px]  lg:text-left lg:max-w-[35vw]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="group relative flex justify-center items-center mt-[10rem] sm:mt-[7rem] lg:mt-[20rem] lg:ml-[10rem] ">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-[300px] h-[300px] rounded-full border-2 border-white opacity-0 group-hover:opacity-20 transition duration-300 bg-white"></div>
          </div>
          <Link
            to="/destination"
            className="bg-white rounded-full p-10 sm:p-[7rem] w-[150px] h-[150px] text-[#0B0D17] text-xl flex justify-center items-center z-10 "
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
