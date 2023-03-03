import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import MobileNavBar from "./MobileNavBar";


const Navbar = ({ navlinks }) => {
  const [mobileNavState, setMobileNavState] = useState(false);

  return (
    <>
      <header className="absolute top-6 right-0 left-0 flex h-auto w-auto items-center justify-center">
        <nav className="booknow-container flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="w-22 h-9 object-fill text-3xl font-bold text-sky-700">
              BookNow
            </span>
          </NavLink>
          <ul className="flex items-center gap-7 lg:hidden">
            {navlinks?.map((val, i) => (
              <li key={i} className="flex items-center justify-center gap-1">
                <NavLink to={val.id}>{val.icon}</NavLink>
                <NavLink to={val.id} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button type="button" className="button-sky px-7 text-base">
                Join Us
              </button>
            </li>
          </ul>
          <ul className="hidden items-center lg:flex">
            <li>
              <button
                type="button"
                onClick={() => setMobileNavState(!mobileNavState)}
                className="flex items-center justify-center transition-all duration-200 active:scale-90"
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="fiter object-cover shadow-sm"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <MobileNavBar navlinks={navlinks} mobileNavState={mobileNavState} />
      
    </>
  );
};

export default Navbar;
