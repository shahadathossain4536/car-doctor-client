import React from "react";
import Engine from "../../../assets/images/products/6.png";
import Filter from "../../../assets/images/products/3.png";
import Disk_brake from "../../../assets/images/products/1.png";
import Suspension from "../../../assets/images/products/2.png";
import Tyre from "../../../assets/images/products/5.png";
import Battery from "../../../assets/images/products/4.png";
import ProductsCard from "./ProductsCard";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
const Products = () => {
  const productsData = [
    {
      id: 1,
      productName: "Car Engine Plug",
      productPrice: "20.00",
      productImg: Engine,
    },
    {
      id: 2,
      productName: "Car Air Filter",
      productPrice: "20.00",
      productImg: Filter,
    },
    {
      id: 3,
      productName: "Car Disk Brake",
      productPrice: "20.00",
      productImg: Disk_brake,
    },
    {
      id: 4,
      productName: "Car Suspension",
      productPrice: "20.00",
      productImg: Suspension,
    },
    {
      id: 5,
      productName: "Car Tyre",
      productPrice: "20.00",
      productImg: Tyre,
    },
    {
      id: 6,
      productName: "Battery",
      productPrice: "20.00",
      productImg: Battery,
    },
  ];

  return (
    <div>
      <p className="text-center text-[#FF3811] text-[20px] font-bold mb-5">
        Popular Products
      </p>
      <h2 className="text-center text-[45px] font-bold leading-10 mb-10">
        Browse Our Products
      </h2>
      <p className="text-center w-[717px] mx-auto mb-10">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {productsData.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        to="/"
        className="mx-auto mb-6 w-[170px] h-[56px] border-[2px] border-[#FF3811] rounded-lg flex justify-center items-center text-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white transition duration-200 ease-in-out "
      >
        More Products
      </Link>
    </div>
  );
};

export default Products;
