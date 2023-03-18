import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About_us = () => {
  return (
    <div className="my-16 flex justify-between">
      <div className="w-[521px] h-[577px]">
        <div className="relative">
          <img
            className="w-[460px] h-[473px] object-cover object-left-top rounded-md"
            src={person}
            alt=""
            srcset=""
          />
          <img
            className="absolute right-10 top-[250px] w-[350px] h-[332px] object-cover object-center border-8 border-white rounded-md"
            src={parts}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="w-1/2">
        <h6 className="text-[#FF3811] font-bold text-[20px] mb-4">About Us</h6>
        <p className="w-[376px] h-[162px] font-bold text-[45px] ">
          We are qualified & of experience in this field
        </p>
        <p className="w-[490px] font-normal mt-14">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="w-[490px] font-normal mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="w-[170px] h-[56px] bg-[#FF3811] text-lg font-semibold rounded-md text-white mt-12">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About_us;
