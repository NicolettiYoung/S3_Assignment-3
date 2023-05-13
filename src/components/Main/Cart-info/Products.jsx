import React from "react";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"

const Products = ({ id, name, img, price, quantity }) => {
  return (
    <>
       <div key={id} className="product-container col col-12" data-count="0" data-price="3999">
            <img className="img-container" src={img} alt={name} />
            <div className="product-info">
              <div className="product-name">{name}</div>
              <div className="product-control-container">
                <div class="product-control">
                  <Minus className="product-action minus" />
                  <span className="product-count">{quantity}</span>
                  <Plus className="product-action plus" />
                </div>
              </div>
              <div className="price">{price}</div>
            </div>
          </div>
    </>
  )
}

export default Products
/* Functional Components */