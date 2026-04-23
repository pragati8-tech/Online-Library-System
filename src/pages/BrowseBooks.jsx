import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { books, categories } from "../data/books";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const activeCategory = category || "all";
  const filteredBooks = useMemo(() => {
    let result = books;

    if (activeCategory !== "all") {
      result = result.filter((book) => book.category === activeCategory);
    }

    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeCategory, search]);
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="bg-slate-900 py-10 px-6 text-center">
        <h1 className="font-serif text-4xl font-bold text-white mb-2">
          Browse Books
        </h1>
        <p className="text-slate-400">
          {activeCategory === "all"
            ? "Explore our entire collection"
            : `Showing books in: ${activeCategory}`}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="relative w-full mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {" "}
            🔍
          </span>

          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors duration-200 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/books"
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${
                activeCategory === "all"
                  ? "bg-amber-400 text-slate-900"
                  : "bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600 border border-slate-200" // inactive
              }`}
          >
            {" "}
            All Books
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/books/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${
                  activeCategory === cat.slug
                    ? "bg-amber-400 text-slate-900"
                    : "bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600 border border-slate-200"
                }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-500 mb-5">
          {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}{" "}
          found
        </p>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-lg font-semibold">No books found</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="w-full bg-white flex items-center justify-center rounded-t-xl p-2">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">
                    {book.category}
                  </span>

                  <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    by {book.author}
                  </p>

                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-amber-400 text-sm">⭐</span>
                    <span className="text-sm font-semibold text-slate-700">
                      {book.rating}
                    </span>
                  </div>

                  <Link
                    to={`/books/detail/${book.id}`}
                    className="mt-auto block text-center text-xs font-bold bg-slate-900 text-amber-400 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default BrowseBooks;
