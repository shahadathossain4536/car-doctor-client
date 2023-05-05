import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import rectangle65 from "../../assets/icons/Rectangle 65.png";
import { IoSettings } from "react-icons/io5";
import OrderRow from "./OrderRow";
const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log("orders", orders);
  //   const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div className="relative">
      <div className="relative checkout-img">
        <img src={checkoutImg} className=" mx-auto" alt="" srcset="" />
      </div>
      <div className="w-[296px] h-[50px] bg-[#FF3811] text-center rounded flex justify-center items-center absolute top-[250px] left-[500px]">
        <p className="text-center text-white font-medium text-[20px]">
          Home/Orders
          {/* {title} */}
        </p>
      </div>
      <p className="font-bold text-[45px] text-white absolute top-24 left-[180px]">
        {" "}
        Orders
      </p>
      <div>
        <div>
          <h2 className="text-5xl">You Have Order:{orders.length}</h2>
        </div>
      </div>
      <div className="w-[1140px]  bg-[#F3F3F3] rounded-[10px] mx-auto my-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              {orders?.map((order) => (
                <OrderRow
                  key={order?._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleStatusUpdate={handleStatusUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
