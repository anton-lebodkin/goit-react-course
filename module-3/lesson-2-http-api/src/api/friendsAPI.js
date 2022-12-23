import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/friends";

export const createFriend = async (friend) => {
  return axios.post("/", friend);
};

export const deleteFriend = async (id) => {
  return axios.delete(`/${id}`);
};

export const listFriends = async () => {
  return axios.get("/").then((res) => res.data);
};
