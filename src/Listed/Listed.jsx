import { IoIosArrowDown } from "react-icons/io";
// import { useLoaderData } from "react-router-dom";
import { getStorageBookApp } from "../utilities/localStorage";
import { useEffect, useState } from "react";
import { BookRead } from "./BookRead";

export const Listed = () => {
  // const books = useLoaderData();
  const [books, setBookData] = useState([]);
  useEffect(() => {
    fetch("BookData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookData(data);
      });
  }, []);
  const [readData, setReadData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const [readDataWise, setReadDataWise] = useState([]);
  const [displayDataWise, setDisplayDataWise] = useState([]);
  useEffect(() => {
    const storeBook = getStorageBookApp("Read");
    const storeBookInt = Array.isArray(storeBook)
      ? storeBook.map((str) => parseInt(str))
      : [];
    if (Array.isArray(books) && books.length > 0) {
      const bookStore = books.filter((book) =>
        storeBookInt.includes(book.bookId)
      );
      setReadData(bookStore);
      setDisplayData(bookStore);
    }
    const storeBookWise = getStorageBookApp("Wishlist");
    const storeBookWiseInt = Array.isArray(storeBookWise)
      ? storeBookWise.map((str) => parseInt(str))
      : [];
    if (Array.isArray(books) && books.length > 0) {
      const bookStoreWise = books.filter((book) =>
        storeBookWiseInt.includes(book.bookId)
      );
      setReadDataWise(bookStoreWise);
      setDisplayDataWise(bookStoreWise);
    }
  }, [books]);

  const [ascending, setAscending] = useState(true);
  const [ascendingWise, setAscendingWise] = useState(true);

  const handleDisplayBook = (filter) => {
    const sortedItems = [...readData].sort((a, b) =>
      ascending ? a[filter] - b[filter] : b[filter] - a[filter]
    );
    setDisplayData(sortedItems);
    setAscending(!ascending);
    const sortedItemsWise = [...readDataWise].sort((a, b) =>
      ascendingWise ? a[filter] - b[filter] : b[filter] - a[filter]
    );
    setDisplayDataWise(sortedItemsWise);
    setAscendingWise(!ascendingWise);
  };
  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <h2 className="font-WorkSans text-3xl text-Primary dark:text-Primary-dark font-bold text-center py-6 bg-base-200 rounded-2xl">
        Books
      </h2>
      <div className="text-center my-6">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xl font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-green-500 px-5 hover:bg-green-500"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-lg z-[1] grow p-1 shadow !flex-row"
          >
            <li className="grow">
              <a
                onClick={() => handleDisplayBook("rating")}
                className="justify-center px-2 py-1"
              >
                Rating
              </a>
            </li>
            <li className="grow">
              <a
                onClick={() => handleDisplayBook("totalPages")}
                className="justify-center px-2 py-1"
              >
                Number of pages
              </a>
            </li>
            <li className="grow">
              <a
                onClick={() => handleDisplayBook("yearOfPublishing")}
                className="justify-center px-2 py-1"
              >
                Publisher year
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-12">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-auto after:py-2 after:px-4 after:text-lg after:font-WorkSans text-opacity-50 text-Primary dark:text-Primary-dark focus:!text-opacity-80"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-0 border-t-[1px]"
        >
          <div className="py-8 gap-6 grid">
            {displayData.map((displayData) => (
              <BookRead
                key={displayData.bookId}
                readData={displayData}
              ></BookRead>
            ))}
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-auto after:py-2 after:px-4 after:text-lg after:font-WorkSans text-opacity-50 text-Primary dark:text-Primary-dark focus:!text-opacity-80"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-0 border-t-[1px]"
        >
          <div className="py-8 gap-6 grid">
            {displayDataWise.map((displayDataWise) => (
              <BookRead
                key={displayDataWise.bookId}
                readData={displayDataWise}
              ></BookRead>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
