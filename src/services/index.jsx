import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:3009/brasileirao'
  baseURL: "https://app-brasileirao.herokuapp.com",
});

export default api;