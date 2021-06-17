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
  const dispatch = useDispatch();
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
  function addToCart(cart) {
    console.log(cart);
    dispatch(setCart(cart));
  }

  return (
    <div className="Meny">
      <img src={header} className="HeadImg" />
      <Basket />
      <div className="Shopwrap">
        <h1 className="HeadText">MENY</h1>
        {meny.map((item, index) => {
          return (
            <ul key={index}>
              <img
                onClick={() => {
                  addToCart(item);
                }}
                src={AddItem}
                className="AddItem"
              />
              <li>{item.title}</li>
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
