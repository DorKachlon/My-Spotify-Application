import axios from "axios";
import Cookies from "js-cookie";

const network = axios.create({});

const getToken = () => {
    return Cookies.get("token");
};

network.interceptors.request.use((config) => {
    // Do something before request is sent

    config.headers["auth-token"] = getToken();
    return config;
});

network.interceptors.response.use(
    (config) => {
        console.log("RESPONSE", config);
        return config;
    },
    (error) => {
        if (error.response.status !== 200) {
            // window.location = "/login";
        }
        return error;
    }
);

export default network;
