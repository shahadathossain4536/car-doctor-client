import React, { useEffect, useState } from "react";
import rectangle65 from "../../assets/icons/Rectangle 65.png";
const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const [orderService, setOrderService] = useState({});
  console.log("orderService", orderService);
  const {
    customerName,
    email,
    _id,
    serviceName,
    service,
    price,
    phone,
    message,
    status,
  } = order;
  const url = useEffect(() => {
    fetch(`https://car-doctor-server-mu.vercel.app/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, []);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              {orderService?.img && (
                <img src={orderService.img} alt="" srcset="" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <p className="font-bold text-xl">
              <span>$</span>
              {price}
            </p>
          </div>
        </div>
      </td>
      <td>
        <p>{customerName}</p>
        <p>{phone}</p>
      </td>
      <td>Purple</td>
      <th>
        <button
          className="btn btn-ghost btn-xs text-red-500"
          onClick={() => handleStatusUpdate(_id)}
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
