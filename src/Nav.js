import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const linkBase =
    "relative pb-2 text-white hover:after:opacity-30 after:absolute after:top-[3rem] after:left-0 after:h-[3px] after:w-full after:bg-white after:transition-opacity after:duration-300";

  const activeLink = "after:opacity-100 font-semibold";
  const mobileLinkBase =
    "relative pb-2 text-white hover:after:opacity-30 after:absolute after:top-0 after:right-0 after:h-[70%] after:w-[4px] after:bg-white ";
  return (
    <div className="flex justify-between pb-5 items-center relative">
      <img
        className="px-5 pt-3 h-[50px] lg:pt-5 lg:px-7"
        src="/assets/shared/logo.svg"
        alt="logo"
      />
      <img
        className="h-[40px] sm:hidden px-5 pt-3"
        src="/assets/shared/icon-hamburger.svg"
        alt="burger-icon"
        onClick={(e) => setMobileNav(true)}
      />
      <div className="sm:flex text-white bg-[#FFFFFF] bg-opacity-[5%] py-5 hidden w-[90%] justify-evenly lg:w-[50%] lg:mt-5 backdrop-blur-[81.8px]">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "after:opacity-0"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "after:opacity-0"}`
          }
        >
          01 Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "after:opacity-0"}`
          }
        >
          02 Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "after:opacity-0"}`
          }
        >
          03 Technology
        </NavLink>
      </div>
      <div
        className={`block z-[1000] fixed bg-transparent top-0 right-0 min-w-screen min-h-screen backdrop-blur-[40.8px] transform transition-transform duration-500 ease-in-out ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-[1rem] pr-[1rem]">
          <img
            src="/assets/shared/icon-close.svg"
            alt="close"
            onClick={(e) => setMobileNav(false)}
          />
        </div>

        <div className="bg-transparent flex flex-col min-w-[70vw] pl-[2rem] pt-[5rem]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? activeLink : "after:opacity-0"}`
            }
          >
            00 Home
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? activeLink : "after:opacity-0"}`
            }
          >
            01 Destination
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? activeLink : "after:opacity-0"}`
            }
          >
            02 Crew
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              `${mobileLinkBase} ${isActive ? activeLink : "after:opacity-0"}`
            }
          >
            03 Technology
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
