import React from "react";
import logo_img from "../../assets/images/login/login.svg";
const SignIn = () => {
  return (
    <div className="flex justify-around items-center">
      <div>
        <img src={logo_img} alt="" srcset="" />
      </div>
      <div className="w-[550px] h-[680px] border-slate-400 border-2 rounded-md">
        Content
      </div>
    </div>
  );
};

export default SignIn;
