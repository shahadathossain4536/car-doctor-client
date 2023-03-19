import React from "react";
import pepole1 from "../../../assets/images/Ellipse 2 (1).png";
import quote from "../../../assets/icons/quote.svg";
import { IoArrowBackSharp, IoArrowForwardSharp, IoStar } from "react-icons/io5";
const Testimonial = () => {
  return (
    <div className="relative">
      <p className="text-center text-[#FF3811] text-[20px] font-bold mt-14 mb-10">
        Testimonial
      </p>
      <h2 className="text-center text-[45px] font-bold leading-10 mb-10">
        What Customer Says
      </h2>
      <p className="text-center w-[717px] mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>

      <div className="flex justify-between items-center my-10">
        <div className="w-[558px] h-[349px] border-2 border-[#F3F3F3] rounded-[10px]">
          <div className="flex justify-around items-center mt-5 gap-10">
            <div className="flex gap-4 items-center">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={pepole1}
                alt=""
              />
              <div>
                <p className="text-[#444444] text-[25px] font-bold">
                  Awlad Hossain
                </p>
                <p className="text-[20px] text-[#737373] font-semibold">
                  Businessman
                </p>
              </div>
            </div>
            <img
              className="w-[56px] h-[56px] text-[#FF3811] opacity-20"
              src={quote}
              alt=""
              srcset=""
            />
          </div>
          <p className="mx-16 my-3 text-[#737373] text-sm text-left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex justify-start items-center gap-1 my-7 mx-16 text-[#FF912C]">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
        <div className="w-[558px] h-[349px] border-2 border-[#F3F3F3] rounded-[10px]">
          <div className="flex justify-around items-center mt-5 gap-10">
            <div className="flex gap-4 items-center">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={pepole1}
                alt=""
              />
              <div>
                <p className="text-[#444444] text-[25px] font-bold">
                  Awlad Hossain
                </p>
                <p className="text-[20px] text-[#737373] font-semibold">
                  Businessman
                </p>
              </div>
            </div>
            <img
              className="w-[56px] h-[56px] text-[#FF3811] opacity-20"
              src={quote}
              alt=""
              srcset=""
            />
          </div>
          <p className="mx-16 my-3 text-[#737373] text-sm text-left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex justify-start items-center gap-1 my-7 mx-16 text-[#FF912C]">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between  transform -translate-y-1/2 left-[-30px] right-[-30px] bottom-[100px]">
        <div>
          <a
            href={``}
            className="text-white text-xl h-[60px] w-[60px] bg-slate-400 flex justify-center items-center rounded-full bg-opacity-50"
          >
            <IoArrowBackSharp />
          </a>
        </div>
        <a
          href={``}
          className="text-white text-xl h-[60px] w-[60px] flex justify-center items-center rounded-full bg-[#FF3811]"
        >
          <IoArrowForwardSharp />
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
