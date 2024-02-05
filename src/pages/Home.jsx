import React, { useContext } from "react";
import { UserContext } from "../store/userContext";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Clear the user context
    setUser({});

    // Navigate to the login page
    return navigate("/login");
  };

  return (
    <div>
      <p>Welcome, {user?.username || "Unknown"}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
