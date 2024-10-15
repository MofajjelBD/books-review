import { useEffect, useState } from "react";
import Book from "./Book.jsx";

export const AllBooks = () => {
  const [BookData, setBookData] = useState([]);
  useEffect(() => {
    fetch("BookData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookData(data);
      });
  }, []);
  return (
    <div className="mt-24">
      <h2 className="font-bold text-4xl text-Primary dark:text-Primary-dark font-Playfair text-center">
        Books
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {BookData.map((BookData) => (
          <Book key={BookData.bookId} BookData={BookData}></Book>
        ))}
      </div>
    </div>
  );
};
