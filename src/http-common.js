import axios from "axios";

export default axios.create({
  baseURL: "https://jedsada-api.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});