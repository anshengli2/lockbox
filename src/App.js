import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import FilesPage from "./pages/FilesPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/files" element={<FilesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
