import React from "react";
import { IoStar } from "react-icons/io5";

const ProductsCard = ({ product }) => {
  const { productName, productPrice, productImg } = product;
  return (
    <div className="w-[364px] h-[389px] border-2 rounded-[10px] mx-auto my-10">
      <div className="w-[326px] h-[215px] bg-[#F3F3F3] rounded-[10px] mx-auto flex justify-center items-center mt-4">
        <img
          className="w-[156px] h-[153px] flex justify-center items-center"
          src={productImg}
          alt=""
          srcset=""
        />
      </div>
      <div className="flex justify-center items-center gap-1 my-4 text-[#FF912C]">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>
      <p className="text-[#444444] text-center text-[25px] font-bold my-2">
        {productName}
      </p>
      <p className="text-[#FF3811] text-center text-[20px] font-semibold my-2">
        {productPrice}
      </p>
    </div>
  );
};

export default ProductsCard;
