import header from "./assets/Header.png";
import Profile from "./assets/Profile.svg";
import { setAll, setActive } from "./redux/actions/userAction";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "./redux/actions/productActions";
import { setCurr } from "./redux/actions/userAction";

import All from "./redux/reducers/cartReducer";

import "./Account.css";
import userEvent from "@testing-library/user-event";
import { getByTitle } from "@testing-library/react";

function Account() {
  const [orders, setOrder] = useState();
  const dispatch = useDispatch();
  const [totals, setTotals] = useState();
  const [curr, setCurrs] = useState();

  const [num, setNum] = useState();
  const [totalLoaded, setTotalLoaded] = useState(false);
  const [CurrLoaded, setCurrLoaded] = useState(false);
  const [acc, setAcc] = useState();
  const [id, setId] = useState();
  let arr = [];
  let array = [];
  let other = 0;
  let anotherone = [];

  let andanotherone = [];

  useEffect(() => {
    fetch(`http://localhost:8001/api/order/${id}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));

    (async () => {
      setCurrLoaded(false);
      let response = await fetch(`http://localhost:8001/api/account/`);
      let data = await response.json();

      dispatch(setCurr(data.accounts[id]));
      setAcc(data);
      setCurrLoaded(true);
      setCurrs(data.accounts[id]);

      setCurr(() => {
        return data;
      });
    })();

    (async () => {
      setTotalLoaded(false);
      let response = await fetch(`http://localhost:8001/api/order/${id}`);
      let data = await response.json();
      dispatch(setTotal(data));
      setTotals(data.length);
      setTotalLoaded(true);
      setTotal(() => {
        return data;
      });
    })();
    fetch(`http://localhost:8001/api/account/`)
      .then((response) => response.json())
      .then((data) => setId(data.activeAccount));
  }, [id]);

  let length = orders && orders.length;
  for (let i = 0; i < length; i++) {
    arr.push(orders && orders[i].total);
    other += arr[i];
  }

  return (
    <div className="Account">
      <img src={header} className="HeadImg" alt="logo" />
      <img src={Profile} className="ProfileImg" alt="logo" />
      <div className="UserInfo">
        <div id="orderContainer">
          <div>
            <h2 className="name">{curr && curr.username}</h2>

            <p className="email">{curr && curr.email}</p>
          </div>
        </div>
      </div>
      <div className="orderhistorik">
        <h2 className="Mid">Orderhistorik</h2>
        {orders &&
          orders.map((order) => {
            return (
              <div className="kvitto">
                <span className="id">
                  <span>{order.orderID}</span>
                </span>
                <span className="date">
                  <span className="somestyle">{order.date}</span>
                </span>
                <br></br>
                <span className="totalt">Total ordersumma</span>
                <span className="somestyle">{order.total}</span>

                <hr></hr>
              </div>
            );
          })}

        <div>
          <span className="all">Total spenderat</span>

          <span>{other}</span>
        </div>
      </div>
    </div>
  );
}

export default Account;
