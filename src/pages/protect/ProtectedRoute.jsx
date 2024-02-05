import React, { useContext, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../../store/userContext";
import { fetchUserDetails } from "../../controllers/user";

const ProtectedRoute = ({ element }) => {
  const { user, setUser, fetching, setFetching } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const res = await fetchUserDetails();
        if (res) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);
  if (fetching) {
    return <div>Loading...</div>;
  }

  return Object.keys(user).length > 0 ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
