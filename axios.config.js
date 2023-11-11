import axios from "axios";

const Axios = axios.create({
 baseURL: "https://api.engenesis.ororra.com/v1",
});

export default Axios;
