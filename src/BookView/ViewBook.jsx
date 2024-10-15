import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getStorageBookApp,
  removeApp,
  saveApp,
} from "../utilities/localStorage.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ViewBook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = Array.isArray(books)
    ? books.find((book) => book.bookId === idInt)
    : null;
  const {
    image,
    bookName,
    author,
    category,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    review,
  } = book;

  // Add button value
  const readStore = "Read";
  const WishlistStore = "Wishlist";

  // handle add to local storage to read
  const handleAddToBook = (id, saveStore) => {
    const storeData = getStorageBookApp(WishlistStore);
    const existsWishlist = storeData.find((storeData) => storeData == id);
    if (existsWishlist) {
      removeApp(id, WishlistStore);
      forTost(saveStore);
      saveApp(id, saveStore);
    } else {
      forTost(saveStore);
      saveApp(id, saveStore);
    }
  };

  // handle add to local storage to WishList
  const handleStoreToBook = (id, saveStore) => {
    const storeData = getStorageBookApp(readStore);
    const existsRead = storeData.find((storeData) => storeData == id);
    if (existsRead) {
      toast.error(`Book already added to ${readStore}`, {
        position: "top-right",
        autoClose: 3600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      forTost(saveStore);
      saveApp(id, saveStore);
    }
  };

  // Tost for both read & wishlist
  const forTost = (saveStore) => {
    const storeData = getStorageBookApp(saveStore);
    const exists = storeData.find((storeData) => storeData == id);
    if (exists) {
      toast.error(`Book already added to ${saveStore}`, {
        position: "top-right",
        autoClose: 3600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`Book added successful ${saveStore}`, {
        position: "top-right",
        autoClose: 3600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <ToastContainer></ToastContainer>
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1 grid">
          <div className="bg-base-200 rounded-2xl w-full lg:p-20 justify-center flex">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </div>
        <div className="col-span-1 grid items-center">
          <h2 className="card-title text-2xl font-bold font-Playfair text-Primary">
            {bookName}
          </h2>
          <p className="text-base font-medium font-WorkSans text-Primary text-opacity-80 py-2">
            {author}
          </p>
          <div className="py-3 border-y my-1">
            <span className="text-base font-medium font-WorkSans text-Primary text-opacity-80 flex gap-2">
              {category}
            </span>
          </div>
          <div className="py-2">
            <p className="text-base font-WorkSans text-Primary leading-6 text-opacity-70">
              <span className="font-bold text-base font-WorkSans text-Primary">
                Review :
              </span>
              {review}
            </p>
          </div>
          <div className="flex gap-4 flex-wrap py-2">
            <strong className="font-bold text-base leading-7 font-WorkSans text-Primary items-center flex">
              Tag
            </strong>
            {tags.map((tags, Index) => (
              <span
                key={Index}
                className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50"
              >
                {tags}
              </span>
            ))}
          </div>
          <div className="my-2 border-b"></div>
          <div className="overflow-x-auto mb-6">
            <table className="table">
              <tbody>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Number of Pages:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {totalPages}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Publisher:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {publisher}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Year of Publishing:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {yearOfPublishing}
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Rating:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    {rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4">
            <a
              onClick={() => handleAddToBook(id, readStore)}
              className="btn font-WorkSans text-Primary text-opacity-100 font-semibold text-lg border border-Primary border-opacity-30 bg-transparent px-5"
            >
              {readStore}
            </a>
            <a
              onClick={() => handleStoreToBook(id, WishlistStore)}
              className="btn font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-info px-5 hover:text-Primary"
            >
              {WishlistStore}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
ViewBook.propTypes = {
  book: PropTypes.any,
};
