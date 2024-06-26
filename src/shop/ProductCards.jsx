/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ GridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            {/*product image*/}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/*product action links*/}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                    <i className="icofont-heart"></i>
                </a>
                <Link to="/card-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            {/* product content*/}
            <div className="product-content">
                <h5>
                    <Link to>{product.name}</Link>
                </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
