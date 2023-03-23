import React from "react";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import img1 from "../../assets/images/Rectangle 1540.png";
import img2Video from "../../assets/images/Rectangle 1541.png";
import img3Arrow from "../../assets/images/Frame.png";
import img4Doc from "../../assets/images/Frame2.svg";
import img5Logo from "../../assets/images/Group 2.png";
// import img3Arrow from "../../assets/images/Frame.png";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  return (
    <div className="relative">
      <div className="relative serviceDetails-img">
        <img src={checkoutImg} className=" mx-auto" alt="" srcset="" />
      </div>
      <div className="w-[296px] h-[50px] bg-[#FF3811] text-center rounded flex justify-center items-center absolute top-[250px] left-[500px]">
        <p className="text-center text-white font-medium text-[20px]">
          Home/Service Details
        </p>
      </div>
      <p className="font-bold text-[45px] text-white absolute top-24 left-[180px]">
        {" "}
        Service Details
      </p>
      <div className="grid grid-cols-12 my-20">
        <div className="col-span-8 w-full mx-auto px-[30px]">
          <img src={img1} alt="" srcset="" />
          <p className="font-bold text-[35px] my-8">
            Unique Car Engine Service
          </p>
          <p className="text-[16px] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-[364px] h-[204px] border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10 my-3">
              <p className="text-[#444444] text-[20px] font-bold">
                Instant Car Services
              </p>
              <p className="text-[#737373] text-base font-normal py-2">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-[364px] h-[204px] border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10 my-3">
              <p className="text-[#444444] text-[20px] font-bold">
                24/7 Quality Service
              </p>
              <p className="text-[#737373] text-base font-normal py-2">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-[364px] h-[204px] border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10 my-3">
              <p className="text-[#444444] text-[20px] font-bold">
                Easy Customer Service
              </p>
              <p className="text-[#737373] text-base font-normal py-2">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-[364px] h-[204px] border-t-2 border-[#FF3811] rounded-[10px] bg-[#F3F3F3] p-10 my-3">
              <p className="text-[#444444] text-[20px] font-bold">
                Quality Cost Service
              </p>
              <p className="text-[#737373] text-base font-normal py-2">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>

          <p className="text-[16px] font-normal  pt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p className="font-bold text-[35px] my-8">
            3 Simple Steps to Process
          </p>
          <p className="text-[16px] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="flex justify-between items-center my-6">
            <div className="w-[235px] h-[240px] border-2  border-[#E8E8E8] rounded-[10px]">
              <div className="w-[83px] h-[83px] bg-[#FF3811] bg-opacity-10 rounded-full flex justify-center items-center mx-auto mt-[30px]">
                <div className="w-[56px] h-[56px] bg-[#FF3811] rounded-full flex justify-center items-center mx-auto">
                  <p className="font-bold text-xl text-white text-center">01</p>
                </div>
              </div>
              <p className="text-xl font-bold text-center text-[#151515] my-3">
                Step Two
              </p>
              <p className="text-[#737373] px-7 text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="w-[235px] h-[240px] border-2  border-[#E8E8E8] rounded-[10px]">
              <div className="w-[83px] h-[83px] bg-[#FF3811] bg-opacity-10 rounded-full flex justify-center items-center mx-auto mt-[30px]">
                <div className="w-[56px] h-[56px] bg-[#FF3811] rounded-full flex justify-center items-center mx-auto">
                  <p className="font-bold text-xl text-white text-center">02</p>
                </div>
              </div>
              <p className="text-xl font-bold text-center text-[#151515] my-3">
                Step Three
              </p>
              <p className="text-[#737373] px-7 text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="w-[235px] h-[240px] border-2  border-[#E8E8E8] rounded-[10px]">
              <div className="w-[83px] h-[83px] bg-[#FF3811] bg-opacity-10 rounded-full flex justify-center items-center mx-auto mt-[30px]">
                <div className="w-[56px] h-[56px] bg-[#FF3811] rounded-full flex justify-center items-center mx-auto">
                  <p className="font-bold text-xl text-white text-center">03</p>
                </div>
              </div>
              <p className="text-xl font-bold text-center text-[#151515] my-3">
                Step One
              </p>
              <p className="text-[#737373] px-7 text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="absolute left-[42%] top-[30%] cursor-pointer"
              src={img3Arrow}
              alt=""
              srcset=""
            />
            <img src={img2Video} alt="" srcset="" />
          </div>
        </div>
        <div className="col-span-4 w-full relative">
          <div className="w-[364px] h-[490px] bg-[#F3F3F3] rounded-[10px] p-10">
            <p className="text-[25px] font-bold text-[#151515]">Services</p>
            <div className="w-[284px] h-[56px] bg-[#FF3811] rounded-[5px] my-4 flex justify-between items-center cursor-pointer px-5">
              <p className="text-white font-semibold text-[18px]">
                Full Car Repair
              </p>
              <IoArrowForwardSharp className="text-white text-2xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white rounded-[5px] my-4 flex justify-between items-center cursor-pointer px-5">
              <p className=" font-semibold text-[18px]">Engine Repair</p>
              <IoArrowForwardSharp className="text-[#FF3811] text-2xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white rounded-[5px] my-4 flex justify-between items-center cursor-pointer px-5">
              <p className=" font-semibold text-[18px]">Automatic Services</p>
              <IoArrowForwardSharp className="text-[#FF3811] text-2xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white rounded-[5px] my-4 flex justify-between items-center cursor-pointer px-5">
              <p className=" font-semibold text-[18px]">Engine Oil Change</p>
              <IoArrowForwardSharp className="text-[#FF3811] text-2xl" />
            </div>
            <div className="w-[284px] h-[56px] bg-white rounded-[5px] my-4 flex justify-between items-center cursor-pointer px-5">
              <p className=" font-semibold text-[18px]">Battery Charge</p>
              <IoArrowForwardSharp className="text-[#FF3811] text-2xl" />
            </div>
          </div>
          <div className="w-[364px] h-[262px] bg-[#151515] rounded-[10px] my-7 p-[40px]">
            <p className="text-[25px] font-bold text-[#ffff]">Download</p>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-3">
                <img src={img4Doc} alt="" srcset="" />
                <div>
                  <p className="text-[18px] font-bold text-white">
                    Our Brochure
                  </p>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <div className="w-[56px] h-[56px] rounded-[10px] bg-[#FF3811] flex justify-center items-center cursor-pointer">
                <IoArrowForwardSharp className="text-white text-2xl" />
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-3">
                <img src={img4Doc} alt="" srcset="" />
                <div>
                  <p className="text-[18px] font-bold text-white">
                    Company Details
                  </p>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <div className="w-[56px] h-[56px] rounded-[10px] bg-[#FF3811] flex justify-center items-center cursor-pointer">
                <IoArrowForwardSharp className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-[364px] h-[489px] rounded-[10px] bg-[#151515] py-[50px] px-[47px] ">
            <img className="mx-auto" src={img5Logo} alt="" srcset="" />
            <p className="text-center text-white text-[20px] font-bold my-8">
              Need Help? We Are Here To Help You
            </p>
            <div className="w-[270px] h-[126px] bg-white rounded-[10px] relative">
              <p className="text-[20px] text-[#FF3811] font-bold text-center pt-6">
                Car Doctor
                <span className="text-[#151515]"> Special</span>
              </p>
              <p className="text-[#737373] font-bold text-base text-center">
                Save up to
                <span className="text-[#FF3811] pt-2"> 60% off</span>
              </p>
              <div className="w-[170px] h-[56px] bg-[#FF3811] rounded-[5px] absolute bottom-[-20px] left-[50px] flex justify-center items-center"><p className="text-white font-semibold text-lg ">Get A Quote</p></div>
            </div>
          </div>
          <p className="font-bold text-[35px] text-[#151515] py-8">Price $250.00</p>
          <button className="w-[364px] h-[56px] rounded-[5px] bg-[#FF3811] flex justify-center items-center">
            <p className="text-white font-semibold text-lg">Proceed Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
