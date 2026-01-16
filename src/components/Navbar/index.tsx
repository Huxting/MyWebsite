import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200/50">
    <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
      <Link to="/" className="font-semibold text-lg tracking-tight">
        Profile
      </Link>
      <div className="flex space-x-8 text-sm text-zinc-500 font-medium">
        <Link to="/" className="hover:text-black transition-colors">
          关于我
        </Link>
        <Link to="/projects" className="hover:text-black transition-colors">
          项目
        </Link>
      </div>
    </div>
  </nav>
);
export default Navbar;
