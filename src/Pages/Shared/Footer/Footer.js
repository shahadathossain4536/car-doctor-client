import React from "react";
import logo from "../../../assets/logo.svg";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGoogle,
  IoLogoLinkedin,
} from "react-icons/io5";
const Footer = () => {
  const footerSocialLnk =
    "w-[36.36px] h-[34.63px] bg-[#FFFFFF] bg-opacity-10 flex - justify-center items-center rounded-full cursor-pointer";
  const footerLinkClass = "text-white text-[20px]  font-semibold mb-10";
  return (
    <footer className="footer p-32 bg-[#151515]  text-white">
      <div className="w-[260px] h-[217px]">
        <img src={logo} alt="" srcset="" />
        <p className="text-justify">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex  gap-2 mt-3">
          <div className={`${footerSocialLnk}`}>
            <IoLogoGoogle />
          </div>
          <div className={`${footerSocialLnk}`}>
            <IoLogoTwitter className="" />
          </div>
          <div className={`${footerSocialLnk}`}>
            <IoLogoInstagram className="" />
          </div>
          <div className={`${footerSocialLnk}`}>
            <IoLogoLinkedin className="" />
          </div>
        </div>
      </div>
      <div>
        <span className={`${footerLinkClass}`}>About</span>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/" className="link link-hover">
          Service
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className={`${footerLinkClass}`}>Company</span>
        <a href="/" className="link link-hover">
          Why Car Doctor
        </a>
        <a href="/" className="link link-hover">
          About
        </a>
      </div>
      <div>
        <span className={`${footerLinkClass}`}>Support</span>
        <a href="/" className="link link-hover">
          Support Center
        </a>
        <a href="/" className="link link-hover">
          Feedback
        </a>
        <a href="/" className="link link-hover">
          Accessability
        </a>
      </div>
    </footer>
  );
};

export default Footer;
