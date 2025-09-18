import React, { useState } from "react";
import Logo from "../assets/Alibaba-logo.svg";
import { GoQuestion } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { PiSuitcaseRollingLight } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setDropdown(dropdown === item ? null : item);
  };

  const Divider = () => (
    <span className="w-px h-5 bg-gray-400 rounded-lg"></span>
  );

  return (
    <nav className="bg-white w-full shadow-xl sticky top-0 right-0 z-50 gap-3" dir="rtl">
      <div className="flex items-center justify-between h-16 px-5">
        {/* Logo + Menu */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <img src={Logo} alt="logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 text-gray-800 font-medium">
            {/* بلیط هواپیما */}
            <li className="relative">
              <button
                className="flex items-center transition delay-200 hover:text-blue-500"
                onClick={() => toggleDropdown("plane")}
              >
                بلیط هواپیما
                <IoIosArrowDown
                  className={`mr-1 transition-transform duration-200 ${
                    dropdown === "plane" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdown === "plane" && (
                <ul className="absolute top-8 right-0 bg-white shadow-lg rounded-lg p-2 w-40">
                  <li className="p-2 hover:bg-gray-100">داخلی</li>
                  <li className="p-2 hover:bg-gray-100">خارجی</li>
                </ul>
              )}
            </li>
            <Divider />

            <li>
              <a href="" className="transition delay-200 hover:text-blue-500">بلیط قطار</a>
            </li>
            <Divider />
            <li>
              <a href="" className="transition delay-200 hover:text-blue-500">بلیط اتوبوس</a>
            </li>
            <Divider />

            {/* اقامت */}
            <li className="relative">
              <button
                className="flex items-center transition delay-200 hover:text-blue-500"
                onClick={() => toggleDropdown("hotel")}
              >
                اقامت
                <IoIosArrowDown
                  className={`mr-1 transition-transform duration-200 ${
                    dropdown === "hotel" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdown === "hotel" && (
                <ul className="absolute top-8 right-0 bg-white shadow-lg rounded-lg p-2 w-40">
                  <li className="p-2 hover:bg-gray-100">هتل‌ها</li>
                  <li className="p-2 hover:bg-gray-100">ویلا و سوئیت</li>
                </ul>
              )}
            </li>
            <Divider />

            <li>
              <a href="" className="transition delay-200 hover:text-blue-500">تور</a>
            </li>
            <Divider />
            <li>
              <a href="" className="transition delay-200 hover:text-blue-500">ویزا</a>
            </li>
            <Divider />
            <li>
              <a href="" className="transition delay-200 hover:text-blue-500">پنل آژانسی</a>
            </li>
            <Divider />

            {/* بیشتر */}
            <li className="relative">
              <button
                className="flex items-center transition delay-200 hover:text-blue-500"
                onClick={() => toggleDropdown("more")}
              >
                بیشتر
                <IoIosArrowDown
                  className={`mr-1 transition-transform duration-200 ${
                    dropdown === "more" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdown === "more" && (
                <ul className="absolute top-8 right-0 bg-white shadow-lg rounded-lg p-2 w-40">
                  <li className="p-2 hover:bg-gray-100">بیمه مسافرتی</li>
                  <li className="p-2 hover:bg-gray-100">راهنما</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex justify-end gap-8">
          <h1 className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <GoQuestion className="mt-1 ml-1" />
            مرکز پشتیبانی آنلاین
          </h1>
          <h1 className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <PiSuitcaseRollingLight className="mt-1 ml-1" />
            سفرهای من
          </h1>
          <h1 className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <LuUser className="mt-1 ml-1" />
            ورود یا ثبت نام
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-white shadow-lg p-5 md:hidden">
          {/* بلیط هواپیما */}
          <li>
            <button
              className="flex items-center transition delay-200 hover:text-blue-500"
              onClick={() => toggleDropdown("plane")}
            >
              بلیط هواپیما
              <IoIosArrowDown
                className={`mr-1 transition-transform duration-200 ${
                  dropdown === "plane" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdown === "plane" && (
              <ul className="ml-4 mt-2">
                <li className="p-2 hover:bg-gray-100">داخلی</li>
                <li className="p-2 hover:bg-gray-100">خارجی</li>
              </ul>
            )}
          </li>

          <li>
            <a href="" className="transition delay-200 hover:text-blue-500">بلیط قطار</a>
          </li>
          <li>
            <a href="" className="transition delay-200 hover:text-blue-500">بلیط اتوبوس</a>
          </li>

          {/* اقامت */}
          <li>
            <button
              className="flex items-center cursor-pointer transition delay-200 hover:text-blue-500"
              onClick={() => toggleDropdown("hotel")}
            >
              اقامت
              <IoIosArrowDown
                className={`mr-1 cursor-pointer transition-transform duration-200 ${
                  dropdown === "hotel" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdown === "hotel" && (
              <ul className="ml-4 mt-2">
                <li className="p-2 hover:bg-gray-100">هتل‌ها</li>
                <li className="p-2 hover:bg-gray-100">ویلا و سوئیت</li>
              </ul>
            )}
          </li>

          <li>
            <a href="" className="transition delay-200 hover:text-blue-500">تور</a>
          </li>
          <li>
            <a href="" className="transition delay-200 hover:text-blue-500">ویزا</a>
          </li>
          <li>
            <a href="" className="transition delay-200 hover:text-blue-500">پنل آژانسی</a>
          </li>

          {/* بیشتر */}
          <li>
            <button
              className="flex items-center transition delay-200 hover:text-blue-500"
              onClick={() => toggleDropdown("more")}
            >
              بیشتر
              <IoIosArrowDown
                className={`mr-1 transition-transform duration-200 ${
                  dropdown === "more" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdown === "more" && (
              <ul className="ml-4 mt-2">
                <li className="p-2 hover:bg-gray-100">بیمه مسافرتی</li>
                <li className="p-2 hover:bg-gray-100">راهنما</li>
              </ul>
            )}
          </li>

          <hr />
          <li className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <GoQuestion className="ml-1" /> مرکز پشتیبانی آنلاین 
          </li>
          <li className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <PiSuitcaseRollingLight className="ml-1" /> سفرهای من
          </li>
          <li className="flex cursor-pointer transition delay-200 hover:text-blue-500">
            <LuUser className="ml-1" /> ورود یا ثبت نام
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
