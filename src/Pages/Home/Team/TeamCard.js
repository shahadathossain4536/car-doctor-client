import React from "react";
import fb from "../../../assets/icons/fb.png";
import twitter from "../../../assets/icons/twitter.png";
import linkedin from "../../../assets/icons/linkedin.png";
import insta from "../../../assets/icons/insata.png";

const TeamCard = ({ team }) => {
  const { img, name, role } = team;
  return (
    <div className="w-[364px] h-[487px] border-2 rounded-[10px] mx-auto my-6">
      <img
        className="w-[314px] h-[293px] object-cover object-center rounded-[10px] mx-auto mt-5"
        src={img}
        alt=""
        srcset=""
      />
      <p className="text-center text-[25px] font-semibold mt-4 text-[#444444]">
        {name}
      </p>
      <p className="text-center text-[20px] font-semibold mt-2 text-[#737373]">
        {role}{" "}
      </p>
      <div className="flex justify-center items-center gap-2 my-3">
        <img src={fb} alt="" srcset="" />
        <img src={twitter} alt="" srcset="" />
        <img src={linkedin} alt="" srcset="" />
        <img src={insta} alt="" srcset="" />
      </div>
     
    </div>
  );
};

export default TeamCard;
