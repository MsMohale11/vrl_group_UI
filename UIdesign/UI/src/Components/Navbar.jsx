import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About us ",
      dropdown: [
        { name: "Our History", path: "/history" },
        { name: "Mission & Vision", path: "/vision" },
        { name: "Boards of Directors", path: "/directors" },
      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Logistics", path: "/logistics" },
        { name: "Other Services", path: "/otherservices" },
      ],
    },
    { name: "Investors Desk", path: "/investors" },
    { name: "Careers", path: "/career" },
    {
      name: "Contact",
      dropdown: [
        { name: "Contact Us", path: "/contactus" },
        { name: "Branch List", path: "/branchlist" },
        { name: "Track Consignment", path: "/consignment" },
        { name: "PickUp Request", path: "/pickup" },
        { name: "Booking Console Sign-up", path: "/Booking" },
      ],
    },
  ];

  return (
    <nav className="bg-yellow-400/70 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://www.vrlgroup.in/v4_images/VRLLOGO.svg"
              alt="VRL Logo"
              className="w-24 h-auto"
            />
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex  items-center">
           {navItems.map((item) =>
  item.dropdown ? (
    <div key={item.name} className="relative">
      <button
        onMouseEnter={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
        className="text-black font-semibold hover:text-white transition px-3 py-2"
      >
        {item.name}
      </button>
      {openDropdown === item.name && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-20">
          {item.dropdown.map((dropItem) => (
            <Link
              key={dropItem.name}
              to={dropItem.path}
              className="block px-5 py-3 text-black hover:bg-yellow-100 hover:text-red-700 transition"
              onClick={() => setOpenDropdown(null)} // optional: close dropdown on click
            >
              {dropItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : (
    <Link
      key={item.name}
      to={item.path}
      className="text-black hover:text-white font-semibold transition px-3 py-2"
    >
      {item.name}
    </Link>
  )
)}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-3">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={item.name} className="space-y-1">
                  <span className="block font-semibold text-black">{item.name}</span>
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="block text-black hover:text-red-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-black py-2 hover:text-red-800 transition "
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
