import { headerLogo } from "./../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleHamburgerClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="padding-x sm:px-16 top-8 z-10 absolute w-full">
      <nav className="flex justify-between items-center max-container">
        {/* logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* nav items */}
        <ul className="nav_items flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-[#6d6d6d]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* hamburger */}
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block max-lg:absolute right-10 top-0"
            onClick={handleHamburgerClick}
          />
          <div className="mobile_menu">
            {/* nav items mobile_menu */}
            <ul
              className={`bg-white min-lg:hidden shadow-lg px py rounded-md absolute right-4 z-11 top-12 w-48 min-sm:w-64 border border-gray-200 flex flex-col gap-4 ${
                isMenuVisible ? "" : "hidden"
              }`}
            >
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat hih text-lg leading-normal text-gray-600 hover:text-[#FF6452] transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* login/explore */}
        <button className="padding-x info-text font-montserrat  border-1 rounded-md max-lg:hidden  bg-[#FF6452] border-[#FF6452]    shadow-lg hover:shadow-xl hover:bg-transparent transition-all duration-300 transform">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Nav;
