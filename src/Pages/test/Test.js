import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
const Test = () => {
  let box = document.querySelector(".width");
  console.log("box", box);

  const prevBtn = () => {
    console.log("prevBtn");
    let width = box.clientWidth;
    box.scrollRight = box.scrollRight - width;
  };

  return (
    <div className="relative overflow-hidden">
      <button>
        <IoArrowBackSharp onClick={prevBtn} className="text-4xl" />
      </button>
      <button className="text-4xl">
        <IoArrowForwardSharp />
      </button>
      <div
        id="width"
        className="width flex gap-3 overflow-x-hidden scroll-smooth"
      >
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </div>
    </div>
  );
};

export default Test;
