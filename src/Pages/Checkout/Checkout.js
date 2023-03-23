import React from "react";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="relative">
      <div className="relative checkout-img">
        <img src={checkoutImg} className=" mx-auto" alt="" srcset="" />
      </div>
      <div className="w-[296px] h-[50px] bg-[#FF3811] text-center rounded flex justify-center items-center absolute top-[250px] left-[500px]">
        <p className="text-center text-white font-medium text-[20px]">
          Home/Checkout
        </p>
      </div>
      <p className="font-bold text-[45px] text-white absolute top-24 left-[180px]">
        {" "}
        Check Out
      </p>
      <div className="w-[1140px]  bg-[#F3F3F3] rounded-[10px] mx-auto my-10">
        <div className="flex justify-center items-center py-14">
          <form className="grid grid-cols-12 gap-5">
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px]  px-3 bg-[#FFFFFF] col-span-6"
              placeholder="First Name"
              type="text"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Last Name"
              type="text"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Your Phone"
              type="text"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Your Email"
              type="email"
            />
            <textarea
              className="w-[946px] h-[258px] rounded-[10px] px-3 pt-1 outline-none col-span-12"
              placeholder="Your Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="w-[946px] h-[64px] bg-[#FF3811] rounded-[10px] text-[20px] text-white text-center col-span-12">
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
