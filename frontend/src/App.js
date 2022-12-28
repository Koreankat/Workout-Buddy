import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from "react";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import WorkoutUpdate from "./components/WorkoutUpdate";

function App() {
  const [isUpdating, setIsUpdating] = useState(1);
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            ></Route>

            {/* <Route
              path='/workout'
              element={<WorkoutUpdate isUpdating={isUpdating} />}
            ></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
