import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Favourites from "./pages/favourites";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}
