import PropTypes from "prop-types";

import "./ProductDetails.css";

const ProductDetails = (props) => {
  return (
    <div className="product-card">
      <img src={props.product.thumbnail} alt="Product thumbnail" />
      <p>
        {props.product.title.toUpperCase()}
        {props.product.rating > 4.5 ? (
          <b>Top product!</b>
        ) : (
          <p>Good product!</p>
        )}
      </p>
      <p>Rating: {props.product.rating}</p>
      <p>Price: {props.product.price}$</p>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
