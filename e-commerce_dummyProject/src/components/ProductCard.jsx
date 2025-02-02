import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import {
  addTocart,
  counterActions,
  productwiseCount,
  noti,
} from "../store/shopping-cart.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard(props) {
  const producttCount = useSelector(
    (state) => state.productWiseCount.product[props.productid]
  );
  const product = {
    productimage: props.productimage,
    productid: props.productid,
    producttitle: props.producttitle,
    productratingrate: props.productratingrate,
    productprice: props.productprice,
  };

  console.log("products", product);

  const navigate = useNavigate();
  function NavigateToProductDetails(product_name, id) {
    navigate(`/product/${product_name}/${id}`);
  }

  const [isHoveringProductId, setIsHoveringProductId] = useState(0);
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  function handleMouseEnterAddToCartBtn() {
    dispatch(noti.naming(props.producttitle));
  }

  function handleMouseEnter(id) {
    setIsHoveringProductId(id);
  }

  function addToCartHandleClick(productId) {
    setClicked(true);
    dispatch(productwiseCount.increment(productId));
    dispatch(counterActions.increment(1));
    if (productId === props.productid) {
      dispatch(addTocart(product));
      props.notifyy(producttCount);
    }
  }
  function handleIncrementClick(productId) {
    dispatch(productwiseCount.increment(productId));
    dispatch(counterActions.increment(1));
    if (productId === props.productid) {
      props.notifyy(producttCount);
    }
  }
  function handleDecrementClick(productId) {
    dispatch(counterActions.decrement(1));
    if (productId === props.productid) {
      if (producttCount === 1) {
        setClicked(false);
      }
      dispatch(productwiseCount.decrement(productId));
      props.notifyy(producttCount);
    }
  }

  return (
    <>
      <div
        onMouseEnter={() => handleMouseEnter(props.productid)}
        onMouseLeave={() => handleMouseEnter(0)}
        className={styles.productcard}
      >
        <div className={styles.productcardContent}>
          <div
            onClick={() =>
              NavigateToProductDetails(props.producttitle, props.productid)
            }
            className={styles.image_container}
          >
            <img src={props.productimage} alt="img" />
          </div>
          <p className={styles.title}>{props.producttitle}</p>
          <p className={styles.instock}>IN STOCK</p>
          <p className={styles.rating}>{props.productratingrate}</p>
          <p className={styles.price}>${props.productprice}</p>
        </div>
        {isHoveringProductId === props.productid ? (
          <>
            <div className={styles.addtocartbtn_container}>
              {clicked ? (
                <>
                  <button className={styles.addtocartbtnclicked}>
                    <button
                      onClick={() => handleDecrementClick(props.productid)}
                      className={styles.decrement}
                    >
                      -
                    </button>
                    {producttCount}
                    <button
                      onClick={() => handleIncrementClick(props.productid)}
                      className={styles.increment}
                    >
                      +
                    </button>
                  </button>
                </>
              ) : (
                <button
                  onMouseEnter={handleMouseEnterAddToCartBtn}
                  onClick={() => addToCartHandleClick(props.productid)}
                  className={styles.addtocartbtn}
                >
                  Add to cart
                </button>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
