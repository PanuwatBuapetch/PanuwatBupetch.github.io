import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 max-w-6xl mx-auto border-b border-slate-800">
      <div className="text-xl font-bold text-white">PB<span className="text-sky-500">.</span>dev</div>
      <div className="flex gap-6 text-sm font-medium text-slate-400">
        <Link to="/" className="hover:text-white">About</Link>
        <Link to="/skills" className="hover:text-white">Skills</Link>
        <Link to="/projects" className="hover:text-white">Projects</Link>
      </div>
    </nav>
  );
}