import { NavLink } from "react-router-dom";
// Based on that we apply active/inactive styling
const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 
  ${isActive ? "bg-amber-400 text-slate-900" : "text-slate-300 hover:bg-slate-800 hover:text-amber-400"}`;
function NavBar(){

    return (
         // 🔹 Sticky navbar
        <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg shadow-black/20">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2 group">
                <span className="text-2xl">📚</span>
                <span className="font-serif text-2xl font-bold text-amber-400 tracking-wide group-hover:text-amber-300 transition-colors"> LibrarySystem</span>
                </NavLink>
                 {/* 🔹 Navigation links */}
                <ul className="flex items-center gap-1 list-none m-0 p-0">
                    <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
                    <li><NavLink to="/books" className={linkClass}>Browse Books</NavLink></li>
                    <li><NavLink to="/add-book" className={linkClass}>+ Add Book</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
export default NavBar