import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux_store/action/productsAction";
export default function Card({ item }) {
  const { image, title, id, count, price, category } = item;
  console.log(price);
  const dispatch = useDispatch();
  function increaseItemQuantity(id) {
    dispatch(increment(id));
  }
  function decreaseItemQuantity(id) {
    dispatch(decrement(id));
  }
  return (
    <div className="product__card">
      <div className="card">
        <Link
          to={{
            pathname: `/productDetails/${id}`,
          }}
        >
          <img src={image} alt={title} />
        </Link>
      </div>
      <i style={{textAlign:"left", fontSize:"12px", color:"white", backgroundColor:"dodgerblue", padding:"2px", borderRadius:"5px", marginTop:"5px"}}>{category}</i>
      <div className="meal_title">
        <p>{title}</p>
        <p>Price:{price}$</p>
      </div>
      <div className="card_addItem">
        <div>
          <button
            onClick={() => decreaseItemQuantity(id)}
            disabled={count === 0 ?  true : false}
          >
            -
          </button>{" "}
          {count} <button onClick={() => increaseItemQuantity(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
