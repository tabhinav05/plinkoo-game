// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game";
import { Footer} from "./components";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
