import axios from "axios";
//api
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "62b665d5ab3b4e47a23147596a1ab5ea",
  },
});
