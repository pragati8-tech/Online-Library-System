import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === Number(id))
  );

  if (!book) {
    return <div className="p-10 text-center">Book not found ❌</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">

        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-slate-600 mb-2">by {book.author}</p>

        <p className="text-sm text-blue-500 mb-2">{book.category}</p>

        <p className="mb-4 text-slate-700">{book.description}</p>

        <p className="text-sm mb-1">📄 Pages: {book.pages}</p>
        <p className="text-sm mb-1">📅 Year: {book.year}</p>

        <div className="mt-6">
          <Link to="/books">← Back to Books</Link>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;