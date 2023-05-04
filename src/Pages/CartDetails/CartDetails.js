import React from "react";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import "./CartDetails.css";
const CartDetails = () => {
  return (
    <div className="relative">
      <div className="relative cartDetails-img">
        <img src={checkoutImg} className=" mx-auto" alt="" srcset="" />
      </div>

      <p className="font-bold text-[45px] text-white absolute top-24 left-[180px]">
        {" "}
        Cart Details
      </p>
      <p className="text-[#FF3811] font-medium absolute top-[170px] left-[182px]">
        Home - Product Details
      </p>
      <div className="mx-auto">
        <table className="w-full">
          <tr>
            <td>
              {" "}
              <p className="w-[40px] h-[40px] bg-slate-700 rounded-full text-white text-center">
                X
              </p>
            </td>
            <td>
              <div className="w-[150px] h-[150px] rounded-[10px] bg-orange-900"></div>
            </td>
            <td>
              <p>Malcolm Lockyer</p>
              <p>Malcolm Lockyer</p>
              <p>Malcolm Lockyer</p>
            </td>
            <td>$25.00</td>
            <td>22-10-2022</td>
            <td>
              <button className="w-[120px] h-[48px] rounded-[10px] bg-orange-600"></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CartDetails;
