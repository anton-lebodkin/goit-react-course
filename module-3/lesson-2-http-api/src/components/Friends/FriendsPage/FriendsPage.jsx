import React from "react";
import { nanoid } from "nanoid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import FriendsList from "../FriendsList/FriendsList";

import * as FriendsAPI from "../../../api/friendsAPI";
import CreateFriend from "../CreateFriend/CreateFriend";

class FriendsPage extends React.Component {
  state = {
    friends: [],
    isLoading: false,
    isCreateFriendModalOpen: false,
    isSuccessNotificationVisible: false,
    isErrorNotificationVisible: false,
  };

  componentDidMount() {
    this.getFriendsList();
  }

  getFriendsList = async () => {
    try {
      this.setState({ isLoading: true });
      const friends = await FriendsAPI.listFriends();
      this.setState({ friends });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  createFriend = async (friend) => {
    try {
      this.setState({ isLoading: true });
      await FriendsAPI.createFriend({
        id: nanoid(),
        ...friend,
        age: parseInt(friend.age),
      });
      this.handleCloseModal();
      this.showSuccessNotification();
      await this.getFriendsList();
    } catch (error) {
      console.error(error);
      this.showErrorNotification();
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteFriend = async (id) => {
    try {
      this.setState({ isLoading: true });
      await FriendsAPI.deleteFriend(id);
      await this.getFriendsList();
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openCreateModal = () => {
    this.setState({ isCreateFriendModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isCreateFriendModalOpen: false });
  };

  showSuccessNotification = () => {
    this.setState({ isSuccessNotificationVisible: true });
  };

  hideSuccessNotification = () => {
    this.setState({ isSuccessNotificationVisible: false });
  };

  showErrorNotification = () => {
    this.setState({ isErrorNotificationVisible: true });
  };

  hideErrorNotification = () => {
    this.setState({ isErrorNotificationVisible: false });
  };

  render() {
    return (
      <>
        <Box padding="30px">
          <Button onClick={this.openCreateModal}>Create friend</Button>

          {this.state.isLoading && <CircularProgress color="secondary" />}
          {!this.state.isLoading && (
            <FriendsList
              friends={this.state.friends}
              onFriendDeleted={this.deleteFriend}
            />
          )}
          <CreateFriend
            isCreateFriendModalOpen={this.state.isCreateFriendModalOpen}
            onFriendCreated={this.createFriend}
            handleCloseModal={this.handleCloseModal}
          />

          {/* Success */}
          <Snackbar
            open={this.state.isSuccessNotificationVisible}
            autoHideDuration={6000}
            onClose={this.hideSuccessNotification}
          >
            <Alert
              onClose={this.hideSuccessNotification}
              severity="success"
              sx={{ width: "100%" }}
            >
              Friend was successfully added!
            </Alert>
          </Snackbar>

          {/* Failed */}
          <Snackbar
            open={this.state.isErrorNotificationVisible}
            autoHideDuration={6000}
            onClose={this.hideErrorNotification}
          >
            <Alert
              onClose={this.hideErrorNotification}
              severity="error"
              sx={{ width: "100%" }}
            >
              Something happened during friend creation!
            </Alert>
          </Snackbar>
        </Box>
      </>
    );
  }
}

export default FriendsPage;
