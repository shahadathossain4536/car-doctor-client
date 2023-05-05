import React from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import Banner1 from "../../../assets/images/banner/1.jpg";
import Banner2 from "../../../assets/images/banner/2.jpg";
import Banner3 from "../../../assets/images/banner/3.jpg";
import Banner4 from "../../../assets/images/banner/4.jpg";
import Banner5 from "../../../assets/images/banner/5.jpg";
import Banner6 from "../../../assets/images/banner/6.jpg";
import "./BannerItem.css";
const BannerItem = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img  h-[600px] object-center overflow-y-hidden">
        <img src={image} className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-[0px]">
        <a
          href={`#slide${prev}`}
          className="text-white text-xl h-[60px] w-[60px] bg-slate-400 flex justify-center items-center rounded-full bg-opacity-80"
        >
          <IoArrowBackSharp />
        </a>
        <a
          href={`#slide${next}`}
          className="text-white text-xl h-[60px] w-[60px] flex justify-center items-center rounded-full bg-[#FF3811]"
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
  );
};

export default BannerItem;
