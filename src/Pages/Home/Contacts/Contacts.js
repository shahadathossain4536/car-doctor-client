import React from "react";
import calender from "../../../assets/icons/001-timetable.png";
import phone from "../../../assets/icons/Group.png";
import location from "../../../assets/icons/Group 35.png";
const Contacts = () => {
  return (
    <div className="h-[250px] bg-[#151515] my-16 rounded-[10px] flex justify-around">
      <div className="flex gap-3 items-center">
        <img
          src={calender}
          className="w-[40.86px] h-[40.86px]"
          alt=""
          srcset=""
        />
        <div className="text-white">
          <p className="font-medium text-base">We are open monday-friday</p>
          <p className="font-bold text-[25px]">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img
          src={phone}
          className="w-[40.86px] h-[40.86px]"
          alt=""
          srcset=""
        />
        <div className="text-white">
          <p className="font-medium text-base">Have a question?</p>
          <p className="font-bold text-[25px]">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img
          src={location}
          className="w-[40.86px] h-[40.86px]"
          alt=""
          srcset=""
        />
        <div className="text-white">
          <p className="font-medium text-base">Need a repair? our address</p>
          <p className="font-bold text-[25px]">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
