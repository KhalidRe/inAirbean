import React, { Component } from "react";

import basket from "./Basket.png";
import "./Basket.css";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

export default class SecondBasket extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], cartItems: [] };
  }
  handleAddToCart(e, product) {
    this.setState((state) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          "Du har inga produkter"
        ) : (
          <div>Du har valt {cartItems.length} produkter</div>
        )}
      </div>
    );
  }
}
