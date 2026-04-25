# 📚 LibrarySystem — Online Library App

A React-based online library system where users can browse, search, and add books.

---

## 🛠️ Tech Stack

- **React** — UI Library
- **Vite** — Project Setup
- **React Router DOM** — Page Routing
- **Redux Toolkit** — State Management
- **Tailwind CSS** — Styling

---

## 📁 Project Structure

src/
├── store/
│   ├── store.js            # Redux store
│   └── booksSlice.js       # Books state + actions
├── components/
│   └── Navbar.jsx          # Navigation bar
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── BrowseBooks.jsx     # Browse + filter + search
│   ├── BookDetails.jsx     # Single book detail
│   ├── AddBook.jsx         # Add new book form
│   └── NotFound.jsx        # 404 page
├── data/
│   └── books.js            # Dummy books data
├── App.jsx                 # Routes setup
└── main.jsx                # Entry point

---

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/pragati8-tech/Online-Library-System
```

### 2. Go to the Project folder 

```bash
cd Online-Library-System
```

### 3. install Dependencies

```bash
npm install
```

### 4. start Development server 

```bash
npm run dev
```

### 5. Browser mein open karo
http://localhost:5173
---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Welcome page, categories, popular books |
| Browse Books | `/books` | All books with search and filter |
| Browse by Category | `/books/:category` | Filter books by category |
| Book Details | `/books/detail/:id` | Single book full detail |
| Add Book | `/add-book` | Form to add new book |
| 404 | `*` | Page not found |

---

## ✨ Features

- Browse books by category
- Search books by title or author
- View detailed info of any book
- Add new book with form validation
- Redux state management
- 404 page for invalid routes

---

## 👤 Author

**Pragati Agrawal**  
GitHub: [pragati8-tech](https://github.com/pragati8-tech/Online-Library-System)