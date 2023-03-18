import React from "react";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import TeamCard from "./TeamCard";
const Team = () => {
  const TeamData = [
    {
      id: 1,
      name: "Car Engine Plug",
      img: team1,
      role: "Engine Expert",
    },
    {
      id: 2,
      name: "Car Engine Plug",
      img: team2,
      role: "Engine Expert",
    },
    {
      id: 3,
      name: "Car Engine Plug",
      img: team3,
      role: "Engine Expert",
    },
  ];
  return (
    <div className="relative">
      <p className="text-center text-[#FF3811] text-[20px] font-bold mt-14 mb-10">
        Team
      </p>
      <h2 className="text-center text-[45px] font-bold leading-10 mb-10">
        Meet Our Team
      </h2>
      <p className="text-center w-[717px] mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {TeamData.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
      <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 bottom-[200px]">
        <div>
          <a
            href={``}
            className="text-white text-xl h-[60px] w-[60px] bg-slate-400 flex justify-center items-center rounded-full bg-opacity-80"
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

export default Team;
