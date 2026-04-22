// Dummy data for the online library system
// This data will be used across multiple pages

export const categories = [
  { id: 1, name: "Fiction", icon: "📖", color: "#e74c3c", slug: "fiction" },
  { id: 2, name: "Non-Fiction", icon: "📰", color: "#2980b9", slug: "non-fiction" },
  { id: 3, name: "Sci-Fi", icon: "🚀", color: "#8e44ad", slug: "sci-fi" },
  { id: 4, name: "Mystery", icon: "🔍", color: "#27ae60", slug: "mystery" },
  { id: 5, name: "Biography", icon: "👤", color: "#e67e22", slug: "biography" },
  { id: 6, name: "Fantasy", icon: "🧙", color: "#16a085", slug: "fantasy" },
];

export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
    rating: 4.2,
    description:
      "A story of wealth, love, and the American Dream set in the 1920s. Nick Carraway narrates the mysterious life of his neighbor Jay Gatsby, who throws lavish parties in hopes of reuniting with his lost love, Daisy Buchanan.",
    cover: "https://covers.openlibrary.org/b/id/8432483-L.jpg",
    pages: 180,
    year: 1925,
    popular: true,
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "sci-fi",
    rating: 4.7,
    description:
      "Set in the distant future, Dune follows Paul Atreides as his family accepts control of the desert planet Arrakis — the only source of the most valuable substance in the universe. A tale of politics, religion, ecology, and human emotion.",
    cover: "https://covers.openlibrary.org/b/id/8757670-L.jpg",
    pages: 412,
    year: 1965,
    popular: true,
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "non-fiction",
    rating: 4.5,
    description:
      "A brief history of humankind, exploring how Homo sapiens came to dominate the Earth. Harari covers the cognitive revolution, the agricultural revolution, and the scientific revolution in a sweeping narrative.",
    cover: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
    pages: 443,
    year: 2011,
    popular: true,
  },
  {
    id: 4,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "mystery",
    rating: 4.6,
    description:
      "The complete adventures of the world's most famous detective. Sherlock Holmes and his companion Dr. Watson solve baffling mysteries through keen observation, logical reasoning, and deductive thinking.",
    cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    pages: 307,
    year: 1892,
    popular: true,
  },
  {
    id: 5,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "biography",
    rating: 4.3,
    description:
      "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years. A riveting story of the creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries.",
    cover: "https://covers.openlibrary.org/b/id/7527313-L.jpg",
    pages: 656,
    year: 2011,
    popular: true,
  },
  {
    id: 6,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "fantasy",
    rating: 4.8,
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. A magical adventure of friendship, courage, and the eternal battle between good and evil.",
    cover: "https://covers.openlibrary.org/b/id/10110415-L.jpg",
    pages: 309,
    year: 1997,
    popular: true,
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    category: "fiction",
    rating: 4.6,
    description:
      "A dystopian social science fiction novel set in a totalitarian society ruled by Big Brother. Winston Smith works for the Ministry of Truth, rewriting history to suit the Party's needs, until he dares to rebel.",
    cover: "https://covers.openlibrary.org/b/id/8575173-L.jpg",
    pages: 328,
    year: 1949,
    popular: false,
  },
  {
    id: 8,
    title: "The Martian",
    author: "Andy Weir",
    category: "sci-fi",
    rating: 4.4,
    description:
      "Astronaut Mark Watney is stranded alone on Mars after a dust storm. With limited supplies, he must use his wit and ingenuity to survive while NASA and his crewmates work to bring him home.",
    cover: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
    pages: 369,
    year: 2011,
    popular: false,
  },
];

// Helper: get only popular books
export const popularBooks = books.filter((book) => book.popular);

// Helper: get books by category slug
export const getBooksByCategory = (categorySlug) =>
  books.filter((book) => book.category === categorySlug);

// Helper: get single book by id
export const getBookById = (id) =>
  books.find((book) => book.id === parseInt(id));
