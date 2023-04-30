import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shamir from "./pages/Shamir";
import { useState } from "react";
function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <Router>
      <NavigationBar isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setLogin={setLogin} />} />
        <Route path="/Shamir" element={<Shamir />} />
      </Routes>
    </Router>
  );
}

export default App;
