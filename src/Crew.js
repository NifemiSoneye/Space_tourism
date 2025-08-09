import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import { useEffect } from "react";
import data from "./data/db.json";
const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activePersonel, setActivePersonel] = useState("Douglas Hurley");
  useEffect(() => {
    try {
      setCrew(data.crew); // assuming your JSON has { crew: [...] }
      setIsLoading(false);
    } catch (err) {
      setFetchError(err.message);
      setIsLoading(false);
    }
  }, []);
  const personel = crew.find((item) => item.name === activePersonel);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!crew || crew.length === 0) return;

      const currentIndex = crew.findIndex(
        (item) => item.name === activePersonel
      );

      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % crew.length;
        setActivePersonel(crew[nextIndex].name);
      }

      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + crew.length) % crew.length; // handles negative index
        setActivePersonel(crew[prevIndex].name);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [crew, activePersonel]);
  useEffect(() => {
    if (!crew || crew.length === 0) return;

    const interval = setInterval(() => {
      setActivePersonel((prevName) => {
        const currentIndex = crew.findIndex((item) => item.name === prevName);
        const nextIndex = (currentIndex + 1) % crew.length;
        return crew[nextIndex].name;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [activePersonel, crew]);

  return (
    <div className="bg-crew-mobile flex flex-col  min-h-screen bg-cover bg-center sm:bg-crew-tablet lg:bg-crew-desktop">
      <Nav />
      <p className="text-white text-center sm:text-left sm:pl-[2rem] lg:pl-[5rem] uppercase lg:text-[1.5rem]">
        <span className="text-gray-500 pr-[1rem]">02</span> MEET YOUR CREW
      </p>
      {isLoading && <p className="text-white text-center">Loading...</p>}
      {fetchError && <p className="text-red-500 text-center">{fetchError}</p>}
      {personel && (
        <div
          key={personel.name}
          className="sm:mx-[7rem] animate-fade-in lg:grid grid-cols-2 lg:mx-[5rem]"
        >
          <div className="lg:mt-[4rem] flex flex-col">
            <p className="text-center text-gray-500 text-[1rem] pt-[2rem] uppercase lg:text-left lg:text-[2rem]">
              {personel.role}
            </p>
            <p className="text-center text-white text-[2rem] pb-[1.5rem] lg:text-left lg:text-[4rem] uppercase">
              {personel.name}
            </p>
            <p className="text-center text-[#D0D6F9] lg:text-left lg:max-w-[40vw]">
              {personel.bio}
            </p>

            <div className="flex justify-center mt-[2rem] lg:justify-start lg:mt-[10rem]">
              {crew.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActivePersonel(item.name)}
                  className={`mx-2  transition duration-200 h-[10px] w-[10px] rounded-full cursor-pointer
              ${
                activePersonel === item.name
                  ? "bg-white"
                  : " bg-white opacity-50 hover:opacity-100"
              }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="relative w-fit mx-auto mt-[2rem]">
            <img
              src={personel.images.png}
              alt={personel.name}
              className="mx-auto w-[200px] sm:w-[300px] md:w-[400px] my-[6rem]  lg:my-[2rem] "
            />
            <div className="absolute bottom-0 left-0 w-full h-16 lg:h-[8rem] bg-gradient-to-t from-[#0B0D17]/95 to-transparent pointer-events-none lg:hidden" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Crew;
