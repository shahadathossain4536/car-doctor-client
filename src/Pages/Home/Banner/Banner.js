import React from "react";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import Banner1 from "../../../assets/images/banner/1.jpg";
import Banner2 from "../../../assets/images/banner/2.jpg";
import Banner3 from "../../../assets/images/banner/3.jpg";
import Banner4 from "../../../assets/images/banner/4.jpg";
import Banner5 from "../../../assets/images/banner/5.jpg";
import Banner6 from "../../../assets/images/banner/6.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="carousel w-full mb-7">
      <div id="slide1" className="carousel-item relative w-full ">
        {/* <img
          src={Banner5}
          className="carousel-img w-full h-[600px] object-cover rounded-md"
        /> */}

        <div className="carousel-img h-[600px] object-cover ">
        <img
          src={Banner5}
          className="w-full rounded-md"
        />
        </div>
    

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-[0px]">
          <a
            href="#slide4"
            className="text-white text-xl h-[60px] w-[60px] bg-slate-400 flex justify-center items-center rounded-full bg-opacity-30"
          >
            <IoArrowBackSharp />
          </a>
          <a
            href="#slide2"
            className="text-white text-xl h-[60px] w-[60px] bg-slate-400 flex justify-center items-center rounded-full bg-[#FF3811]"
          >
            <IoArrowForwardSharp />
          </a>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-[100px] top-[200px] ">
          <h1 className="text-[60px] font-bold text-white ">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-[100px] top-[400px] w-[522px] ">
          <p className="text-white text-lg leading-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex  gap-5 transform -translate-y-1/2 left-[100px] top-[500px] w-[522px] ">
          <button className="h-[56px] w-[170px] text-white text-lg font-semibold rounded-md bg-[#FF3811] hover:border-[#ffff] hover:bg-[#ffff] hover:text-[#FF3811] transition duration-200 ease-in-out">
            Discover More
          </button>
          <button className="h-[56px] w-[170px] text-white text-lg font-semibold rounded-md border-2 border-white hover:border-[#FF3811] hover:bg-[#FF3811] transition duration-200 ease-in-out">
            Latest Project
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
