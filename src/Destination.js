import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import data from "./data/db.json";
const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activePlanet, setActivePlanet] = useState("Moon");
  useEffect(() => {
    try {
      setDestinations(data.destinations); // assuming your JSON has { crew: [...] }
      setIsLoading(false);
    } catch (err) {
      setFetchError(err.message);
      setIsLoading(false);
    }
  }, []);
  const planet = destinations.find((item) => item.name === activePlanet);
  console.log(destinations);
  return (
    <div className="bg-destination-mobile min-h-screen bg-cover bg-center sm:bg-destination-tablet lg:bg-destination-desktop">
      <Nav />
      <div>
        <p className="text-white text-center sm:text-left sm:pl-[2rem] lg:pl-[10rem] uppercase lg:text-[1.5rem]">
          <span className="text-gray-500 pr-[1rem]">01</span> Pick your
          destination
        </p>
        {isLoading && <p className="text-white text-center">Loading...</p>}
        {fetchError && <p className="text-red-500 text-center">{fetchError}</p>}
        {planet && (
          <div className="grid grid-cols-1 place-items-center mx-[2rem] lg:grid-cols-2 lg:mt-[3rem]">
            <img
              src={planet.images.png}
              alt={planet.name}
              className="mx-auto w-[120px] sm:w-[150px] md:w-[400px] my-[3rem] animate-spinSlow"
            />
            <div className="lg:flex flex-col justify-start items-start lg:ml-[3rem] sm:mx-[5rem]">
              <div className="flex justify-center lg:justify-start space-x-4">
                {destinations.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActivePlanet(item.name)}
                    className={`uppercase px-2 py-1 transition duration-200 text-white
              ${
                activePlanet === item.name
                  ? "border-b-2 border-white"
                  : "opacity-50 hover:opacity-100"
              }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="text-white text-center text-[3rem] py-[1rem] uppercase sm:text-[5rem] lg:text-left">
                {planet.name}
              </p>
              <p className="text-[#D0D6F9] text-[12px] text-center pb-[1rem] sm:text-[16px] lg:text-left lg:pr-[5rem] lg:text-[22px]  lg:min-w-[40vw]">
                {planet.description}
              </p>
              <hr className="w-full lg:w-[70%] border-t border-white my-6" />
              <div className="sm:flex gap-[5rem] sm:justify-center lg:justify-start">
                <div className="flex flex-col">
                  <p className="text-white text-center pt-[0.5rem] lg:text-left">
                    AVG DISTANCE
                  </p>
                  <p className="text-white text-center text-[2rem] pb-[1rem] lg:text-left">
                    {planet.distance}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-center pt-[0.5rem] lg:text-left">
                    EST.TRAVEL TIME
                  </p>
                  <p className="text-white text-center text-[2rem] pb-[0.5rem] lg:text-left">
                    {planet.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;
