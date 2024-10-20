import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const BookDetailPage = () => {
  const [result, setResult] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      let { id } = params;
      let result = await fetch(`${apiUrl}/${id}`);
      result = await result.json();
      setResult(result);
    };
    fetchBook();
  }, [params]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">View Detail</h2>
      <div className="mb-2">
        <Link to="/">View Book List</Link>
        <div className="grid grid-cols-1 gap-4">
          {result.data && (
            <div
              key={result.data.id}
              className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  Title: {result.data.title}
                </h3>
                <p className="text-gray-600">
                  Description: {result.data.description}
                </p>
                <p className="text-gray-500">Author: {result.data.author}</p>
                <Link to={`/`}>Click here go to back</Link>{" "}
              </div>
            </div>
          )}
          {!result.data && <div>Sorry, Data is not found!</div>}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
