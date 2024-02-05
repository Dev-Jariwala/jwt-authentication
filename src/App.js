import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/protect/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
