import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5124/api",
});

export default instance;
