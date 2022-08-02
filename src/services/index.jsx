import axios from "axios";

const api = axios.create({
  baseURL: "https://app-brasileirao.herokuapp.com",
});

export default api;