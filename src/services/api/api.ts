import axios from "axios";

const api = axios.create({
    baseURL: "https://athena272.github.io/bomb-game-rn/",
});

export default api;