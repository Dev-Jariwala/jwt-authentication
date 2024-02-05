import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create();

// Set default headers for the instance
const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Export the configured instance
export default axiosInstance;
