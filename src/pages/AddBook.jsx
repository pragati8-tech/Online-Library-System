
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";
import { categories } from "../data/books";

function AddBook() {

  const dispatch = useDispatch();   
  const navigate = useNavigate();  

  // ── Form state 
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
    pages: "",
    year: "",
  });

  // ── Validation errors 
  const [errors, setErrors] = useState({});

  // ── Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

   
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ── Form Validation 
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim())
      newErrors.title = "Title zaroori hai";

    if (!formData.author.trim())
      newErrors.author = "Author ka naam zaroori hai";

    if (!formData.category)
      newErrors.category = "Category select karo";

    if (!formData.rating) {
      newErrors.rating = "Rating daalo";
    } else if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating 1 se 5 ke beech honi chahiye";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description zaroori hai";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description kam se kam 20 characters ka hona chahiye";
    }

    if (!formData.pages) {
      newErrors.pages = "Pages ki tadaad daalo";
    } else if (formData.pages < 1) {
      newErrors.pages = "Pages 1 se zyada hone chahiye";
    }

    if (!formData.year) {
      newErrors.year = "Publication year daalo";
    } else if (formData.year < 1000 || formData.year > new Date().getFullYear()) {
      newErrors.year = `Year 1000 se ${new Date().getFullYear()} ke beech hona chahiye`;
    }

    return newErrors;
  };

  // ── Form Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload rokta hai

    // Validation 
    const validationErrors = validate();

   
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   
    const newBook = {
      id: Date.now(),          
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category,
      rating: parseFloat(formData.rating),
      description: formData.description.trim(),
      pages: parseInt(formData.pages),
      year: parseInt(formData.year),
      popular: false,
    };

  
    dispatch(addBook(newBook));

   
    navigate("/books");
  };

  // ── Reusable input field component 
  const InputField = ({ label, name, type = "text", placeholder, min, max }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1">
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-slate-50 text-slate-800 placeholder-slate-400
          focus:outline-none focus:bg-white transition-colors duration-200
          ${errors[name]
            ? "border-red-400 focus:border-red-400"   // error — red border
            : "border-slate-200 focus:border-amber-400" // normal — amber border on focus
          }`}
      />
      {/* Error message */}
      {errors[name] && (
        <p className="text-red-400 text-xs mt-1 font-medium">⚠ {errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-6">
      <div className="max-w-2xl mx-auto">

        {/* ── PAGE HEADING ── */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-1">
            Add New Book
          </h1>
          <p className="text-slate-500">
            Fill in the details to add a book to the library
          </p>
        </div>

        {/* ── FORM CARD ── */}
        <form
          onSubmit={handleSubmit}
          noValidate  // browser validation band — apni validation use karenge
          className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
        >

          {/* Title */}
          <InputField
            label="Book Title"
            name="title"
            placeholder="e.g. The Great Gatsby"
          />

          {/* Author */}
          <InputField
            label="Author Name"
            name="author"
            placeholder="e.g. F. Scott Fitzgerald"
          />

          {/* Category — dropdown */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Category <span className="text-red-400">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-slate-50 text-slate-800
                focus:outline-none focus:bg-white transition-colors duration-200
                ${errors.category
                  ? "border-red-400 focus:border-red-400"
                  : "border-slate-200 focus:border-amber-400"
                }`}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-400 text-xs mt-1 font-medium">⚠ {errors.category}</p>
            )}
          </div>

          {/* Rating + Pages + Year */}
          <div className="grid grid-cols-3 gap-4">
            <InputField
              label="Rating"
              name="rating"
              type="number"
              placeholder="1 - 5"
              min="1"
              max="5"
            />
            <InputField
              label="Pages"
              name="pages"
              type="number"
              placeholder="e.g. 320"
              min="1"
            />
            <InputField
              label="Year"
              name="year"
              type="number"
              placeholder="e.g. 2023"
              min="1000"
              max={new Date().getFullYear()}
            />
          </div>

          {/* Description — textarea */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Book ke baare mein thoda likhein..."
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border-2 text-sm bg-slate-50 text-slate-800 placeholder-slate-400
                focus:outline-none focus:bg-white transition-colors duration-200 resize-none
                ${errors.description
                  ? "border-red-400 focus:border-red-400"
                  : "border-slate-200 focus:border-amber-400"
                }`}
            />
            {errors.description && (
              <p className="text-red-400 text-xs mt-1 font-medium">⚠ {errors.description}</p>
            )}
          </div>

          {/* ── SUBMIT BUTTON ── */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-amber-400 font-bold py-4 rounded-xl hover:bg-slate-700 active:scale-95 transition-all duration-200 text-base mt-2"
          >
            + Add Book to Library
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddBook;