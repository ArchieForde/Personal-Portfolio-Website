export default function Footer() {
  return (
    <footer className="relative z-10 text-center py-4 text-sm text-gray-400 border-t border-green-400/20 mt-10">
      © {new Date().getFullYear()} Archie Forde — Built with React + OGL
    </footer>
  );
}