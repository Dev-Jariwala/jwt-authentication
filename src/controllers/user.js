import axios from "axios";
import BACKEND_URL from "../assets/BACKEND_URL";

const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("token not found");
    return;
  }
  return token;
};
export const fetchUserDetails = async () => {
  try {
    const token = getToken();
    const res = await axios.get(`${BACKEND_URL}user/userDetails`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
export const userLogin = async (formData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}user/login`, formData, {
      withCredentials: true,
    });

    if (response.data.success) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      return response;
    } else {
      return response.data.message;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
