import axios from "axios";
import { createContext, useState, useEffect } from "react";
import BACKEND_URL from "../assets/BACKEND_URL";
import { fetchUserDetails } from "../controllers/user";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchUserDetails();
        if (res) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        // Set fetching to false regardless of success or failure
        setFetching(false);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        fetching,
        setFetching,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
