import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-[#ffffff] text-[#183B56] py-2 px-5 md:px-14 border-b-2 border-[#0085B8]">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-10 h-5" />
          <h3 className="text-[#01ACE4] text-xl font-semibold">Poster</h3>
        </div>
        <div className={mobileMenuOpen ? "block" : "hidden lg:block"}>
          <ul className="absolute top-[50px] left-0 w-full lg:static lg:flex font-semibold justify-between items-center bg-[#ffffff] border-b-2 lg:border-b-0 border-[#0085B8] text-[#183B56]">
            <li
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-5 py-2 me-2"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-5 py-2 me-2"
            >
              <Link to="/article">Article</Link>
            </li>
            <li
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-5 py-2 me-2"
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-5 py-2 me-2"
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-5 py-2 me-2"
            >
              <Link to="/auth/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <div className="text-2xl lg:hidden">
          {mobileMenuOpen ? (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <AiOutlineClose></AiOutlineClose>
            </div>
          ) : (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HiMenuAlt2></HiMenuAlt2>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
