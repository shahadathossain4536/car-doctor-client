import React, { useContext, useState } from "react";
import logo_img from "../../assets/images/login/login.svg";
import fb from "../../assets/images/login/bx_bxl-facebook.png";
import google from "../../assets/images/login/google.png";
import linkedin from "../../assets/images/login/bx_bxl-linkedin.png";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const SignIn = () => {
  const { loginUser } = useContext(AuthContext);
  const [seePass, setSeePass] = useState(true);
  const handleSeePass = () => {
    console.log("handleSeePass");
    setSeePass(!seePass);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        // const user = result.user;
        // console.log("login", user);
        e.target.reset();
      })
      .catch((err) => console.error("login-error", err));
 
  };
  return (
    <div className="flex justify-around items-center my-10">
      <div>
        <img className="w-[360px] h-[402px]" src={logo_img} alt="" srcset="" />
      </div>
      <form
        onSubmit={handleSignIn}
        className="w-[500px] h-[620px] border-slate-400 border-[1px] border-opacity-80  rounded-md"
      >
        <p className="text-[#444444] text-[40px] font-semibold text-center my-5 ">
          Sign In
        </p>
        <div className="mx-8 mt-10">
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
              name="email"
            />
          </div>
          <div>
            <label
              className="block text-[#444444] text-lg font-semibold my-3"
              htmlFor=""
            >
              Password
            </label>

            <div className="w-[430px] h-[60px] border-2 rounded-[10px] flex items-center">
              <div className=" flex justify-start items-center gap-4">
                <input
                  className="mx-2 text-xl w-[375px] outline-none"
                  name="password"
                  type={`${seePass ? "password" : "text"}`}
                />
                {seePass ? (
                  <IoEyeOutline
                    onClick={handleSeePass}
                    className="cursor-pointer mr-3"
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={handleSeePass}
                    className="cursor-pointer mr-3"
                  />
                )}
              </div>
            </div>
          </div>
          <input
            className="w-[430px] h-[60px] bg-[#FF3811] rounded-[10px] text-xl font-semibold  text-white mt-7 cursor-pointer"
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
