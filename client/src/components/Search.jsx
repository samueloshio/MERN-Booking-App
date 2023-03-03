import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { RiHotelBedFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";

const Search = () => {
  // User & Room Picker Handle
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Date Range Handler
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <>
      <div
        className="bg- bottom-10 -mt-6 flex items-center justify-between gap-2
rounded-xl border border-sky-100 bg-sky-200 bg-opacity-50 px-4 py-2 opacity-100 shadow-lg backdrop-blur-lg backdrop-filter lg:w-auto"
      >
        <div className="justify-left relative flex items-center gap-2 px-1 text-base">
          <RiHotelBedFill className="absolute ml-2 text-base" />
          <input
            type="text"
            className="w-96 rounded-3xl bg-white py-2 pl-7  placeholder:text-base focus:outline-none xsm:w-40 sm:w-auto lg:w-60"
            placeholder="Where are you going?"
          />
        </div>
        <div className="relative flex cursor-pointer flex-row items-center justify-center gap-2">
          <SlCalender
            className="text-base"
            onClick={() => setOpenDate(!openDate)}
          />
          <span
            className="flex lg:hidden"
            onClick={() => setOpenDate(!openDate)}
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-8"
            />
          )}
        </div>
        <div className="relative flex cursor-pointer items-center justify-center">
          <GiPerson className="text-base" />
          <span className="flex lg:hidden">{`${option.adult} Adult, ${option.children} Children, ${option.room} Room`}</span>
          <div className="group absolute top-6 flex w-auto flex-col items-start justify-center gap-2 space-y-2 divide-y-2 rounded-lg bg-white bg-opacity-40 px-4 py-2 opacity-100 shadow-lg backdrop-blur-lg backdrop-filter text-gray-200">
            <div className="group flex items-center gap-8">
              <span className="flex">Adult</span>
              <div className="">
                <button type="button" className="">
                  -
                </button>
                <span>1</span>
                <button type="button" className="">
                  +
                </button>
              </div>
            </div>
            <div className="flex  items-start gap-4">
              <span className="flex items-center justify-center">Children</span>
              <div className="flex items-center">
                <button type="button" className="">
                  -
                </button>
                <span>1</span>
                <button type="button" className="">
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <span className="">Room</span>
              <div className="">
                <button type="button" className="">
                  -
                </button>
                <span>1</span>
                <button type="button" className="">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-4">
          <button className="button-light w-auto">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
