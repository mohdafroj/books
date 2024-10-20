import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;
const BookListPage = () => {
  const [result, setResult] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [idSelected, setSelectedId] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      let result = await fetch(`${apiUrl}?page=${page}&limit=${limit}`);
      result = await result.json();
      setResult(result);
    };
    fetchBooks();
  }, [page, limit, idSelected]);
  const deleteBook = async (id) => {
    let response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    response = await response.json();
    setSelectedId(id);
  };
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <Link to="/add">Add New Book</Link>
        <div className="ml-auto">
          <label className="mr-2">Set Limit</label>
          <select
            id="limit"
            name="limit"
            onClick={(e) => setLimit(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option> <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {result.data &&
          result.data.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-500">{item.author}</p>
                <Link to={`/books/edit/${item.id}`}>Edit Detail</Link>{" "}
                ||&nbsp;&nbsp;
                <Link to={`/books/${item.id}`}>View Detail</Link> ||&nbsp;&nbsp;
                <button onClick={() => deleteBook(item.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
      {result.data && (
        <div className="flex justify-center mt-4">
          <span>Total Page: {result.totalPage}</span>
          <button
            onClick={() => setPage(result.prevPage)}
            disabled={result.prevPage === null}
            className={`mx-1 px-4 py-2 border rounded ${
              result.prevPage === null
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            Previous
          </button>
          &nbsp;
          <button
            onClick={() => setPage(result.nextPage)}
            disabled={result.nextPage === null}
            className={`mx-1 px-4 py-2 border rounded ${
              result.nextPage === null
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BookListPage;
