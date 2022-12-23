import React from "react";
import PropTypes from "prop-types";
import FriendItem from "./FriendItem";

class FriendsList extends React.Component {
  render() {
    return (
      <>
        {this.props.friends.map((friend) => (
          <FriendItem friend={friend} />
        ))}
      </>
    );
  }
}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.string,
    }).isRequired
  ),
};
