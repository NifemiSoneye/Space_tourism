import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import data from "./data/db.json";
const Technology = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [technology, setTechnology] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTech, setActiveTech] = useState("Launch vehicle");
  useEffect(() => {
    try {
      setTechnology(data.technology); // assuming your JSON has { crew: [...] }
      setIsLoading(false);
    } catch (err) {
      setFetchError(err.message);
      setIsLoading(false);
    }
  }, []);
  const tech = technology.find((item) => item.name === activeTech);
  return (
    <div className="bg-technology-mobile flex flex-col  min-h-screen bg-cover bg-center sm:bg-technology-tablet lg:bg-technology-desktop m-0">
      <Nav />
      {isLoading && <p className="text-white text-center">Loading...</p>}
      {fetchError && <p className="text-red-500 text-center">{fetchError}</p>}
      <p className="text-white text-center sm:text-left sm:pl-[2rem] lg:pl-[5rem] uppercase lg:text-[1.5rem]">
        <span className="text-gray-500 pr-[1rem]">03</span> SPACE LAUNCH 101
      </p>
      {tech && (
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="lg:flex justify-end lg:order-2 lg:w-full lg:max-w-[800px] ">
            <img
              src={isDesktop ? tech.images.portrait : tech.images.landscape}
              alt={tech.name}
              className="mt-[5rem] h-auto min-h-[150px] w-screen object-cover lg:max-h-[500px] lg:h-[auto] lg:object-contain  lg:mr-0 lg:ml-auto lg:w-auto lg:mt-[2rem] "
            />
          </div>
          <div className="lg:order-1 lg:flex items-center">
            <div className="flex justify-center my-[1rem] lg:flex-col lg:ml-[4rem]">
              {technology.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTech(item.name)}
                  className={`mx-2  transition duration-200 h-[10px] w-[10px] rounded-full cursor-pointer border border-white p-[1rem] text-white flex items-center justify-center lg:p-[2rem] lg:my-[1rem]
              ${
                activeTech === item.name
                  ? "bg-white text-gray-950"
                  : " bg-transparent opacity-50 hover:opacity-100"
              }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="lg:ml-[3rem] ">
              <p className="uppercase text-gray-500 text-center text-[1.5rem] pt-[1rem] lg:text-left">
                The Terminology ...
              </p>
              <p className="text-center text-white text-[2rem] uppercase py-[1rem] sm:text-[4rem] lg:text-left">
                {tech.name}
              </p>
              <p className="text-center text-[#D0D6F9] px-[0.5rem] sm:px-[6rem] lg:text-left lg:pr-[2rem] lg:pl-0 pb-[1rem]">
                {tech.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;
