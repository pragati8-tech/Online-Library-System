import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-6">
      {/* ── BIG 404 ── */}
      <h1 className="font-serif text-[10rem] font-bold text-amber-400 leading-none mb-2">
        404
      </h1>

      {/* ── Emoji ── */}
      <div className="text-6xl mb-6">📭</div>

      {/* ── Heading ── */}
      <h2 className="font-serif text-3xl font-bold text-white mb-3">
        Page Not Found
      </h2>

      <p className="text-slate-400 text-base mb-2">This URL doesn't exists:</p>
      <div className="bg-slate-800 border border-slate-600 rounded-xl px-6 py-3 mb-8">
        <code className="text-red-400 font-mono text-base font-semibold">
          {location.pathname}
        </code>
      </div>

      {/* ── Home Link ── */}
      <Link
        to="/"
        className="bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-amber-300 active:scale-95 transition-all duration-200"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
