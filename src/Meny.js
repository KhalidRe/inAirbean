import React, { useEffect, useState } from "react";
import header from "./assets/Header.png";
import footer from "./assets/footer.png";

import "./Meny.css";
import AddItem from "./component/AddItem.png";
import Basket from "./component/Basket";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./redux/actions/cartAction";
import { setMenu } from "./redux/actions/productActions";
function Meny() {
  const [totalSum, setTotalSum] = useState(0);

  const cartPusher = useSelector((state) => state.cartPusher);

  const dispatch = useDispatch();

  function addTotalCost(item) {
    setTotalSum(totalSum + parseInt(item.price));
  }

  function removeTotalCost(item) {
    setTotalSum(totalSum - item.price);
  }

  useEffect(() => {
    setTotalSum(
      cartPusher.reduce((ac, cv) => {
        return ac + cv.price;
      }, 0)
    );
  }, [cartPusher]);

  const menu = useSelector((state) => {
    console.log(state.menu);
    return state.menu;
  });

  const [meny, setMeny] = useState([]);
  const [menuLoaded, setMenuLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setMenuLoaded(false);
      let response = await fetch("http://localhost:8001/api/coffee");
      let data = await response.json();
      console.log(data.menu);
      dispatch(setMenu(data.menu));
      setMeny(data.menu);
      setMenuLoaded(true);
      setMenu(() => {
        return data.menu;
      });
    })();
  }, []);
  const chosen = useSelector((state) => {
    return state.cartPusher;
  });

  function addToItem(cart) {
    console.log(cart);
    dispatch(setCart(cart));
  }

  return (
    <div className="Meny">
      <img src={header} className="HeadImg" />
      <Basket
        addTotalCost={addTotalCost}
        removeTotalCost={removeTotalCost}
        totalSum={totalSum}
      />
      <div className="Shopwrap">
        <h1 className="HeadText">MENY</h1>
        {meny.map((item, index) => {
          return (
            <ul key={index}>
              <img
                onClick={() => {
                  addToItem(item);
                }}
                src={AddItem}
                className="AddItem"
              />
              <li className="listing">
                {item.title}...............{item.price}
                <p className="desc">{item.desc}</p>
              </li>
            </ul>
          );
        })}
        <div className="Items">
          <ul></ul>
        </div>
      </div>
      <img src={footer} className="LowImg" />
    </div>
  );
}

export default Meny;
