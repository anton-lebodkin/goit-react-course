import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

class FriendItem extends React.Component {
  render() {
    return (
      <>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {this.props.friend.firstName}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {this.props.friend.lastName}
            </Typography>
            <Typography variant="body2">
              Age: {this.props.friend.age}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.string,
  }).isRequired,
};

export default FriendItem;
