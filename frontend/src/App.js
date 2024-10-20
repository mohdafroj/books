import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookListPage from "./pages/BookListPage";
import BookAddPage from "./pages/BookAddPage";
import NotFound from "./pages/NotFound";
import BookDetailPage from "./pages/BookDetailPage";
import BookUpdatePage from "./pages/BookUpdatePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Router>
        <header className=""></header>
        <Routes>
          <Route path="/" exact Component={BookListPage} />
          <Route path="/add" Component={BookAddPage} />
          <Route path={`/books/:id`} Component={BookDetailPage} />
          <Route path={`/books/edit/:id`} Component={BookUpdatePage} />
          <Route Component={NotFound} />
        </Routes>
        <footer className=""></footer>
      </Router>
    </div>
  );
}

export default App;
