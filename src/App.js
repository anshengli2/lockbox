import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shamir from "./pages/Shamir";
import Content from "./pages/Content";
import { useState } from "react";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import FileInfo from "./pages/FileInfo";

function App() {
  const [isLogin, setLogin] = useState(false);
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SCOPES = "https://www.googleapis.com/auth/drive";

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Router>
      <NavigationBar isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setLogin={setLogin} />} />
        <Route path="/Shamir" element={<Shamir />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/FileInfo" element={<FileInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
