import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});
  //   const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-5xl">You Have Order:{orders.length}</h2>
    </div>
  );
};

export default Orders;
