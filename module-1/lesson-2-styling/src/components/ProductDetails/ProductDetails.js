import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardActionArea from "@mui/material/CardActionArea";
import InventoryIcon from "@mui/icons-material/Inventory";

import styles from "./ProductDetails.module.scss";

const productDetailColor = {
  smartphones: "action",
  laptops: "primary",
  fragrances: "secondary",
};

const ProductDetails = ({
  product: { thumbnail, title, description, rating, category },
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt="product thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <InventoryIcon color={productDetailColor[category]} />
            {title}
          </Typography>
          <Rating
            name="product-rating"
            value={rating}
            readOnly
            precision={0.1}
          />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
