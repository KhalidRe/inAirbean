import React, { useState, useRef } from "react";
import basket from "./Basket.png";
import "./Basket.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function Basket() {
  const chosen = useSelector((state) => {
    console.log(state.cartPusher);
    return state.cartPusher;
  });
  const dispatch = useDispatch();
  const [itemcount, setItemcount] = useState(1);
  const target = useRef(null);

  const [cash, setPrice] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div className="Basket">
      <div className="Bask-Wrap" ref={target} onClick={() => setShow(!show)}>
        <div className="Amount">0</div>
        <img src={basket} />
      </div>
      <Overlay target={target.current} show={show}>
        {(props) => (
          <div className="overlay">
            <div className="triangle">1</div>
            {chosen.map((item, index) => {
              return (
                <div>
                  <div className="flexit">
                    <div key={index} className="produkt">
                      <p>{item.title}</p>
                      <p>
                        {item.price * cash}
                        kr
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Overlay>
    </div>
  );
}

export default Basket;
