import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

import logoimage from "../assets/logo.svg";
import { AlignRight, AlignLeft, Menu } from "lucide-react";

const Navbar = () => {
  let [MobaileMenu, SetMobaileMenu] = useState(false);

  let menutoggole = () => {
    SetMobaileMenu(!MobaileMenu);
  };

  let handlehidden = () => {
    SetMobaileMenu(false);
  };

  return (
    <nav className="sticky top-0 right-0 w-full z-50   shadow-md">
      <div className="max-w-container mx-auto relative">
        <div className="flex justify-between items-center py-8 ">
          <div>
            <Link to="/" >
              <img className="h-10 w-18" src={logoimage} alt="" />
            </Link>
          </div>
          <div className="">
            <ul className="sm:hidden lg:flex md:flex gap-14 hidden ">
            <li onClick={handlehidden} className="my-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={handlehidden} className="my-2">
                    <Link to="/About">About</Link>
                  </li>

                  <li onClick={handlehidden} className="my-2">
                    <Link to="/Features">Features</Link>
                  </li>
                  <li onClick={handlehidden} className="my-2">
                    <Link to="/Pricing">Solution</Link>
                  </li>
            </ul>
          </div>
          <div className="lg:hidden sm:flex flex-col justify-end ">
            <button onClick={menutoggole}>
              {MobaileMenu ? <AlignRight /> : <AlignLeft />}
            </button>

            {MobaileMenu && (
              <div className="fixed right-0  bg-neutral-900 w-full p-6 flex flex-col justify-center items-center lg:hidden ">
                <ul className="">
                  <li onClick={handlehidden} className="my-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={handlehidden} className="my-2">
                    <Link to="/Feature">About</Link>
                  </li>

                  <li onClick={handlehidden} className="my-2">
                    <Link to="/Features">Features</Link>
                  </li>
                  <li onClick={handlehidden} className="my-2">
                    <Link to="/Pricing">Solution</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
