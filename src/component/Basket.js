import React, { useState, useRef } from "react";
import basket from "./Basket.png";
import "./Basket.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { addQuantity } from "../redux/actions/cartAction";
import { totalin } from "../redux/actions/cartAction";

function Basket() {
  const history = useHistory();
  const chosen = useSelector((state) => {
    console.log("hej", state.cartPusher);
    return state.cartPusher;
  });
  const dispatch = useDispatch();
  const [itemcount, setItemcount] = useState(1);
  const target = useRef(null);

  const [cash, setPrice] = useState(1);
  const [show, setShow] = useState(false);
  function addToQty(id) {
    console.log(id);
    dispatch(addQuantity(id));
  }

  function redQuantity(id) {
    console.log(id);
    dispatch(addQuantity(id));
  }

  var total = 0;
  var set = 0;

  for (var i = 0; i < chosen.length; i++) {
    set += chosen[i].price * chosen[i].qty;
    total = set;
  }

  function Buy() {
    const x = Object.assign({}, set);
    fetch("http://localhost:8001/api/order", {
      body: JSON.stringify({ order: chosen, total: total }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        history.push("/order");
      });
  }

  return (
    <div className="Basket">
      <div className="Bask-Wrap" ref={target} onClick={() => setShow(!show)}>
        <div className="Amount">{chosen.length}</div>
        <img src={basket} />
      </div>
      <Overlay target={target.current} show={show}>
        {(props) => (
          <div className="overlay">
            <div className="triangle">1</div>
            <h1 className="bhead">Din Beställning</h1>
            {chosen.map((item, index) => {
              return (
                <div>
                  <div className="flexit">
                    <div key={index} className="produkt">
                      <p>{item.title}.................................</p>
                      <p>{item.price * item.qty} kr</p>
                    </div>

                    <div className="btn">
                      <i
                        onClick={() => {
                          addToQty(item.qty++);
                        }}
                        className="flux increase"
                      ></i>
                      <p>{item.qty}</p>
                      <i
                        onClick={() => {
                          if (item.qty !== 0) {
                            redQuantity(item.qty--);
                          }
                        }}
                        className="flux decrease"
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="total">TOTAL...........................{total}</div>

            <div className="button-container">
              <button className="purchase" onClick={() => Buy()}>
                TAKE MY MONEY!
              </button>
            </div>
          </div>
        )}
      </Overlay>
    </div>
  );
}

export default Basket;
