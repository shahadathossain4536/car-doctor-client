import React from "react";
import service1 from "../../../assets/images/services/1.jpg";
import service2 from "../../../assets/images/services/2.jpg";
import service3 from "../../../assets/images/services/3.jpg";
import service4 from "../../../assets/images/services/4.jpg";
import service5 from "../../../assets/images/services/5.jpg";
import service6 from "../../../assets/images/services/6.jpg";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Service = () => {
  const serviceData = [
    {
      id: 1,
      img: service1,
      serviceName: "Electrical System",
      servicePrice: "20.00",
    },
    {
      id: 2,
      img: service2,
      serviceName: "Engine Diagnostics",
      servicePrice: "20.00",
    },
    {
      id: 3,
      img: service3,
      serviceName: "Auto Car Repair",
      servicePrice: "20.00",
    },
    {
      id: 4,
      img: service4,
      serviceName: "Electrical System",
      servicePrice: "20.00",
    },
    {
      id: 5,
      img: service5,
      serviceName: "Engine Diagnostics",
      servicePrice: "20.00",
    },
    {
      id: 6,
      img: service6,
      serviceName: "Auto Car Repair",
      servicePrice: "20.00",
    },
  ];
  return (
    <div>
      <p className="text-center text-[#FF3811] text-[20px] font-bold my-10">
        Service
      </p>
      <h2 className="text-center text-[45px] font-bold leading-10 mb-10">
        Our Service Area
      </h2>
      <p className="text-center w-[717px] mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-3 ">
        {serviceData.map((service) => (
          <div className="w-[364px] h-[348px]  my-10 p-[25px] border-[1px] rounded-[10px] mx-auto">
            <div>
              <img
                className="w-[314px] h-[208.01px] mx-auto rounded-lg"
                src={service.img}
                alt=""
                srcset=""
              />
              <p className="text-[25px] font-bold my-2 text-[#444444]">
                {service.serviceName}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#FF3811] font-semibold text-[20px]">
                  Price : ${service.servicePrice}
                </p>
                <IoArrowForwardSharp className="text-[#FF3811] text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="mx-auto mb-6 w-[170px] h-[56px] border-[2px] border-[#FF3811] rounded-lg flex justify-center items-center text-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white transition duration-200 ease-in-out "
      >
        More Services
      </Link>
    </div>
  );
};

export default Service;
