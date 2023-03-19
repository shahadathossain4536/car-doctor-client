import React from "react";
import people from "../../../assets/icons/group.svg";
const Features = () => {
  return (
    <div>
      <p className="text-center text-[#FF3811] text-[20px] font-bold mt-14 mb-10">
        Core Features
      </p>
      <h2 className="text-center text-[45px] font-bold leading-10 mb-10">
        Why Choose Us
      </h2>
      <p className="text-center w-[717px] mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-6 mx-auto my-6 gap-4">
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
        <div className="w-[170px] h-[150px] border-2 rounded-[10px]">
          <img className="mx-auto mt-5" src={people} alt="" srcset="" />
          <p className="text-[#444444] text-lg text-center font-bold mt-4">
            Expert Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
