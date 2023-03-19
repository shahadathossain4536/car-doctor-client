import React from "react";
import logo_img from "../../assets/images/login/login.svg";
import fb from "../../assets/images/login/bx_bxl-facebook.png";
import google from "../../assets/images/login/google.png";
import linkedin from "../../assets/images/login/bx_bxl-linkedin.png";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="flex justify-around items-center my-10">
      <div>
        <img className="w-[360px] h-[402px]" src={logo_img} alt="" srcset="" />
      </div>
      <form className="w-[500px] h-[620px] border-slate-400 border-[1px] border-opacity-80  rounded-md">
        <p className="text-[#444444] text-[40px] font-semibold text-center my-5 ">
          Sign In
        </p>
        <div className="mx-8 mt-10">
          <div>
            <label
              className="block text-[#444444] text-lg font-semibold my-3"
              htmlFor=""
            >
              Name
            </label>
            <input
              className="w-[430px] h-[60px] border-2 rounded-[10px] text-xl outline-none"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-[#444444] text-lg font-semibold my-3"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="w-[430px] h-[60px] border-2 rounded-[10px] text-xl outline-none"
              type="email"
            />
          </div>

          <input
            className="w-[430px] h-[60px] bg-[#FF3811] rounded-[10px] text-xl font-semibold  text-white mt-7"
            type="submit"
            value="Sign In"
          />
          <p className="text-center font-medium text-[16px] mt-5">
            Or Sign In with
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex justify-center items-center cursor-pointer">
              {" "}
              <img src={fb} alt="" srcset="" />
            </div>
            <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex justify-center items-center cursor-pointer">
              {" "}
              <img src={linkedin} alt="" srcset="" />
            </div>
            <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex justify-center items-center cursor-pointer">
              {" "}
              <img src={google} alt="" srcset="" />
            </div>
          </div>
          <p className="text-center text-[#737373] mt-6">
            New member?
            <span className="text-[#FF3811] ml-2">
              <Link to="/signup">Sign Up Here</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
