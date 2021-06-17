import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddItem from "./AddItem.png";
import { addToCart } from "../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { setCart } from "../redux/actions/cartAction";
const Coffee = ({ ID, title, price, addToCart }) => {
  const menu = useSelector((state) => {
    console.log(state.cart);
  });
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div>
        <img onClick={() => addToCart(ID)} src={AddItem} className="AddItem" />
        <p>
          {title}.......{price}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(Coffee);
