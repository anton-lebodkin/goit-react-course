import React from "react";
import PropTypes from "prop-types";

import ProductDetails from "../ProductDetails/ProductDetails";

const ProductList = (props) => {
  return (
    <>
      <p className="product-list">HELLO</p>
      {props.products.map((product) => (
        <ProductDetails product={product} key={product.id} />
      ))}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
