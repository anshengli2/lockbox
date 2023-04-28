import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
<<<<<<< HEAD
import FilesPage from "./pages/FilesPage";
=======
import Login_Form from "./pages/Login_Form";
>>>>>>> e5c2ae5d65f04fad224f5d70c155adb5fbb01df0

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        <Route path="/files" element={<FilesPage />} />
=======
        <Route path="/" element={<Login_Form />} />
        <Route path="/home" element={<HomePage />} />
>>>>>>> e5c2ae5d65f04fad224f5d70c155adb5fbb01df0
      </Routes>
    </Router>
  );
}

export default App;
