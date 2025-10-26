import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="grow flex items-center justify-center p-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
