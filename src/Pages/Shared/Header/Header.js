import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoCartOutline, IoSearch } from "react-icons/io5";
const Header = () => {
  const navMenuClass = "text-[#444444] mr-2 font-semibold text-[18px]";
  const menuItem = (
    <>
      <li>
        <Link className={`${navMenuClass}`} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={`${navMenuClass}`} to="/">
          About
        </Link>
      </li>
      <li>
        <Link className={`${navMenuClass}`} to="/">
          Services
        </Link>
      </li>
      <li>
        <Link className={`${navMenuClass}`} to="/">
          Blog
        </Link>
      </li>
      <li>
        <Link className={`${navMenuClass}`} to="/">
          Contact
        </Link>
      </li>
      <li>
        <Link className={`${navMenuClass}`} to="/signin">
          SingIn
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar mb-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" srcset="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <IoCartOutline className="h-[24px] w-[24px] mx-5 cursor-pointer" />
        <IoSearch className="h-[24px] w-[24px]  mx-5 cursor-pointer" />

        <Link
          to="/"
          className="w-[170px] h-[56px] border-[2px] border-[#FF3811] rounded-lg flex justify-center items-center text-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white transition duration-200 ease-in-out"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
