import { Link } from "react-router-dom";
import { categories, popularBooks } from "../data/books";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-amber-400 text-sm">⭐</span>
      <span className="text-sm font-semibold text-slate-700">{rating}</span>
    </div>
  );
};
function Home() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <section className="bg-slate-900 text-white py-20 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 text-[20rem] flex items-center justify-center pointer-events-none select-none">
            📚
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">
              Welcome to
            </p>

            <h1 className="font-serif text-5xl font-bold text-white mb-4">
              LibrarySystem
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Discover thousands of books across every genre. Read, explore, and
              build your personal reading list — all in one place.
            </p>

            <Link
              to="/books"
              className="inline-block bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors duration-200"
            >
              Browse Books →
            </Link>
          </div>
        </section>
        <section className="bg-white py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">
              Browse by Category
            </h2>
            <p className="text-slate-500 mb-8">
              Pick a genre you love and dive right in
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/books/${cat.slug}`}
                  className="flex flex-col items-center justify-center gap-2 p-5 bg-slate-50 border-2 border-slate-100 rounded-xl hover:border-amber-400 hover:bg-amber-50 hover:-translate-y-1 transition-all duration-200 group"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-600">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">
              Popular Books
            </h2>
            <p className="text-slate-500 mb-8">
              Highly rated picks loved by our readers
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {popularBooks.map((book) => (
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

                  <div className="p-3 flex flex-col flex-1">
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">
                      {book.category}
                    </span>

                    <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1">
                      {book.title}
                    </h3>

                    <p className="text-xs text-slate-500 mb-2">
                      by {book.author}
                    </p>

                    <StarRating rating={book.rating} />

                    <Link
                      to={`/books/detail/${book.id}`}
                      className="mt-auto pt-2 block text-center text-xs font-bold bg-slate-900 text-amber-400 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
