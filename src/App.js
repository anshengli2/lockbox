import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("");

  return (
    <Router>
      <NavigationBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/Register" element={<Register setUser={setUser} />} />
        <Route
          path="/Login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
