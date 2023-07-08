import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8001/"
    : "https://enchant-drab.vercel.app/";

axios.defaults.baseURL = baseURL;
