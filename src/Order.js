import React, { useState, useEffect } from "react";
import drone from "./assets/drone.png";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "./redux/actions/productActions";
import "./Order.css";
import { useHistory } from "react-router-dom";
function Order() {
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const [orders, setOrders] = useState();
  const history = useHistory();

  function nice() {
    history.push("/meny");
  }
  useEffect(() => {
    fetch(`http://localhost:8001/api/order/${id}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));

    fetch(`http://localhost:8001/api/account/`)
      .then((response) => response.json())
      .then((data) => setId(data.activeAccount));
  }, [id]);
  console.log(orders);

  let length = orders && orders[orders.length - 1];
  console.log(length);
  return (
    <div className="baken">
      <p className="ordernumber">
        Ordernummer #<strong>{length && length.orderID}</strong>
      </p>
      <img src={drone} className="drone" alt="logo" />
      <h1 className="HeadBest">
        Din beställning <br></br> är påväg!
      </h1>
      <p className="ETA">{length && length.eta}</p>
      <button className="OkCool" onClick={() => nice()}>
        Ok, cool!
      </button>
    </div>
  );
}

export default Order;
