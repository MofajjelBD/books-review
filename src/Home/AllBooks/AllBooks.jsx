import { useState } from "react";
import Book from "./Book.jsx";
import { useLoaderData } from "react-router-dom";

export const AllBooks = () => {
  const BookData = useLoaderData();
  const [BookLength, setBookLength] = useState(6);
  // const [BookData, setBookData] = useState([]);
  // useEffect(() => {
  //   fetch("BookData.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setBookData(data);
  //     });
  // }, []);
  return (
    <div className="mt-24">
      <h2 className="font-bold text-4xl text-Primary dark:text-Primary-dark font-Playfair text-center">
        Books
      </h2>
      <div className="flex flex-wrap justify-center gap-6 my-8">
        {BookData.slice(0, BookLength).map((BookData) => (
          <Book key={BookData.bookId} BookData={BookData}></Book>
        ))}
        <div>
          <button
            onClick={() => setBookLength(BookData.length)}
            className={
              BookLength === BookData.length || BookData.length <= 6
                ? "hidden"
                : "btn font-WorkSans text-white text-opacity-100 font-semibold text-base md:text-xl border border-transparent bg-green-500 px-5 hover:bg-green-500"
            }
          >
            Show All Books
          </button>
        </div>
      </div>
    </div>
  );
};
