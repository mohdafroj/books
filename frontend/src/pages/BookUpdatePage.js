import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const BookUpdatePage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const [result, setResult] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      let { id } = params;
      let result = await fetch(`${apiUrl}/${id}`);
      result = await result.json();
      setResult(result);
      setTitle(result.data?.title);
      setAuthor(result.data?.author);
      setDescription(result.data?.description);
    };
    fetchBook();
  }, [params]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !description) {
      setError("Please fill in all fields");
      return;
    }
    setError("");

    // Here, you would typically send the data to your backend or state management
    const updateBook = async (book) => {
      let response = await fetch(`${apiUrl}/${result.data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setError("Record updated successfully!");
      response = await response.json();
    };
    updateBook({ title: title, author: author, description: description });

    // Clear the form
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <div className="mb-2">
        <Link to="/">View Book List</Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default BookUpdatePage;
