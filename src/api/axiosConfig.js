import axios from "axios";

export default axios.create({
    baseURL:'https://a605-176-234-163-4.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});