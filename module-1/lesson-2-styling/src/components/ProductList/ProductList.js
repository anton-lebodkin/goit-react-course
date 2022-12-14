import React from "react";
import PropTypes from "prop-types";
import ProductDetails from "../ProductDetails/ProductDetails";
import Container from "../Container/Container";

const ProductList = (props) => {
  return (
    <Container>
      <p className="product_details_hello">HELLO</p>
      {props.products.map((product) => (
        <ProductDetails product={product} key={product.id} />
      ))}
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
