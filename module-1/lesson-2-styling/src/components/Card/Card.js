import PropTypes from "prop-types";
import styles from "./Card.module.scss";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        src={props.image}
        alt="Card thumbnail"
      />
      <div className={styles.card_container}>
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// export default Card;
