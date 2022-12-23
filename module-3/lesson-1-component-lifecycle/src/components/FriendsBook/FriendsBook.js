import React from "react";
import CreateFriend from "./CreateFriend";
import FriendsList from "./FriendList";

const FRIENDS_BOOK_LOCALSTORAGE_STATE = "friends_book_state";

class FriendsBook extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    const friendsBookState = JSON.parse(
      localStorage.getItem(FRIENDS_BOOK_LOCALSTORAGE_STATE)
    );
    this.setState(friendsBookState);
  }

  onFriendCreated = (friend) => {
    this.setState({ friends: [...this.state.friends, friend] });
  };

  componentDidUpdate() {
    localStorage.setItem(
      FRIENDS_BOOK_LOCALSTORAGE_STATE,
      JSON.stringify(this.state)
    );
  }

  render() {
    return (
      <>
        <CreateFriend onFriendCreated={this.onFriendCreated} />
        <FriendsList friends={this.state.friends} />
      </>
    );
  }
}

export default FriendsBook;
