import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavBar = ({ navlinks, mobileNavState }) => {
  return (
    <>
      <nav
        className={`fixed top-14 right-14 z-50 hidden h-auto items-center justify-center bg-white bg-opacity-50 py-5 px-6 opacity-100 backdrop-blur-lg backdrop-filter transition-transform duration-300 lg:flex ${
          mobileNavState ? "lg:shownavbar" : "lg:noshownavbar"
        }`}
      >
        <ul className="flex  flex-col items-start gap-3">
          {navlinks?.map((val, i) => (
            <li key={i} className="flex items-center justify-center gap-1">
              <NavLink to={val.id}>{val.icon}</NavLink>
              <NavLink to={val.id} className="text-lg text-slate-900">
                {val.link}
              </NavLink>
            </li>
          ))}
          <li>
            <button type="button" className="button-light rounded-lg sm:w-auto">
              Join Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavBar;
