import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <div className="relative z-10 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;