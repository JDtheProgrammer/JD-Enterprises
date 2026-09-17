import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { JDNImg, searchImg } from "../utils";
import { navLists } from "../constants";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/highlights", label: "Highlights" },
  // Add more links as needed
];

const sidebarLinks = [
  { name: "JD Productionz", path: "/jdproductionz" },
  { name: "PFT", path: "/pft" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Support Us", path: "/support" },
];

/* w-full: to have the full width of the screen
 py-52: vertical padding (top & bottom) of 5 to give a bit of padding
 sm: "on small devices", curson-pointer: makes it clickable.
 text-sm: The text-sm class in Tailwind CSS sets the font size to "small," 
 (0.875rem (14px)) by default. This class applies a smaller font size to 
 the text compared to the base size (text-base)(1rem (16px)).
 flex-1: flexbox layout model, often used for layouts that required to dynamically shrink
 and grow.
  */
const Navbar = ({ isBlurred }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <header
        className={`w-full text-center pt-5 sm:px-10 justify-between items-center
        backdrop-blur-md bg-gray-900/80 shadow-md z-50 fixed top-0 rounded-br-[25px] 
        rounded-bl-[65px] rounded-tr-[65px] rounded-tl-[25px] transition-transform duration-500 ${
          isBlurred ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Desktop Nav */}
        <nav className="flex flex-wrap w-full screen-max-width items-center max-sm:hidden">
          {/* Logo - Desktop */}
          <Link
            to="/"
            className="absolute left-4/5 -translate-x-2/3 max-sm:hidden"
          >
            <img src={JDNImg} alt="JDN" height={180} width={180} />
          </Link>
          {/* Logo - Mobile */}
          <Link to="/" className="hidden max-sm:block">
            <img
              src={JDNImg}
              alt="JDN"
              className="pb-10 w-20 h-20 sm:w-[180px] sm:h-[1800px]" // 40x40px on mobile, 180x180px on desktop
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                className="px-[30px] text-lg cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div className="sm:px-5 px-5 flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            {/* <img src={searchImg} alt="search" width={30} height={30} /> */}
            {/* Hamburger for small screens */}
            <button
              className="sm:hidden ml-4"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 10h20M6 16h20M6 22h20" />
              </svg>
            </button>
          </div>

          <div className="w-full mt-[30px] pb-[40px]">
            <Link
              to="/"
              className="hero-title text-2xl font-bold text-cyan-400 hover:text-white transition-colors duration-200"
            >
              JD Nterprisez
            </Link>
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="flex items-center justify-between w-full sm:hidden px-4 py-2">
          <Link to="/">
            <img
              src={JDNImg}
              alt="JDN"
              className="mb-[30px] w-[100px] h-[70px]"
            />
          </Link>
          <Link
            to="/"
            className="flex text-[25px] mb-[18px] text-center font-bold text-cyan-400 hover:text-white transition-colors duration-200"
          >
            JD Nterprises
          </Link>
          <button
            className="ml-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 10h240M6 16h20M6 22h20" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer - Slide from right, full height */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-white"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l16 16M6 22L22 6" />
          </svg>
        </button>
        <div className="flex flex-col mt-20 space-y-6 px-8">
          {sidebarLinks.map((nav) => (
            <Link
              key={nav.name}
              to={nav.path}
              className="text-lg text-cyan-300 hover:text-white transition"
              onClick={() => setSidebarOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
