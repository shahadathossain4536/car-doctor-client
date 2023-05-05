import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import "./Checkout.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { _id, price, title } = useLoaderData();
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregister";
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customerName: name,
      email,
      phone,
      message,
    };
    console.log(order);
    // if (phone.length > 10) {
    //   alert("Phone Number Should be 10 Characters or longer");
    // }else{

    // }
    fetch("https://car-doctor-server-mu.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed SuccessFully");
          form.reset();
        }
      })
      .then((er) => console.log(er));
  };
  return (
    <div className="relative">
      <div className="relative checkout-img">
        <img src={checkoutImg} className=" mx-auto" alt="" srcset="" />
      </div>
      <div className="w-[296px] h-[50px] bg-[#FF3811] text-center rounded flex justify-center items-center absolute top-[250px] left-[500px]">
        <p className="text-center text-white font-medium text-[20px]">
          Home/Checkout
          {/* {title} */}
        </p>
      </div>
      <p className="font-bold text-[45px] text-white absolute top-24 left-[180px]">
        {" "}
        Check Out
      </p>
      <div>
        <p>You are about to order : {title}</p>
        <p>Price : {price}</p>
      </div>
      <div className="w-[1140px]  bg-[#F3F3F3] rounded-[10px] mx-auto my-10">
        <div className="flex justify-center items-center py-14">
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-12 gap-5">
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px]  px-3 bg-[#FFFFFF] col-span-6"
              placeholder="First Name"
              type="text"
              name="firstName"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Last Name"
              type="text"
              name="lastName"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Your Phone"
              type="text"
              name="phone"
            />
            <input
              className="w-[461px] h-[60px] outline-none rounded-[10px] px-3 bg-[#FFFFFF] col-span-6"
              placeholder="Your Email"
              type="email"
              name="email"
              value={user?.email}
            />
            <textarea
              className="w-[946px] h-[258px] rounded-[10px] px-3 pt-1 outline-none col-span-12"
              placeholder="Your Message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              value="submit"
              className="w-[946px] h-[64px] bg-[#FF3811] rounded-[10px] text-[20px] text-white text-center col-span-12"
            >
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
