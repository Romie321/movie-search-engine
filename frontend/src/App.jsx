import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { movieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="main-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
