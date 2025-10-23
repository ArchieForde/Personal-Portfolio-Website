import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/30 backdrop-blur-md border-b border-green-400/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-green-400 font-bold text-xl tracking-wider">
          A_Forde<span className="text-white">.cyber</span>
        </Link>
        <div className="space-x-6 text-sm uppercase">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/projects" className="hover:text-green-400">Projects</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}