import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import "./App.css";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books/detail/:id" element={<BookDetails />} />
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/books/:category" element={<BrowseBooks />} />
            <Route path="/add-book" element={<AddBook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
