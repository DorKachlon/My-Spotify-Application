import axios from "axios";
import Cookies from "js-cookie";

const network = axios.create({});

const getToken = () => {
    return Cookies.get("accessToken");
};

network.interceptors.request.use((config) => {
    // Do something before request is sent
    config.headers["auth-token"] = getToken();
    return config;
});

network.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;
    const originalRequest = error.config;

    if (status === 408) {
      try {
        await network.post('/api/auth/token', { token: Cookies.get('refreshToken') });
        const data = await network(originalRequest);
        return data;
      } catch (e) {
        throw e;
      }
    } else {
      throw error;
    }
  },
);
export default network;
