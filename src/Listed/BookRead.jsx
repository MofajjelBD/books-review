import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router-dom";
export const BookRead = ({ readData }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = readData;
  return (
    <div className="card bg-base-100 w-full border border-gray rounded-2xl dark:bg-slate-800 flex-colum lg:flex-row">
      <figure className="px-6 py-6 ">
        <div className="bg-base-200 rounded-2xl h-[230px] w-full lg:w-[230px] p-8 justify-center flex">
          <img className="h-full w-auto" src={image}></img>
        </div>
      </figure>
      <div className="card-body py-6 lg:ps-0 px-6 justify-start">
        <h2 className="card-title text-2xl font-bold font-Playfair text-Primary dark:text-Primary-dark">
          {bookName}
        </h2>
        <p className="text-base font-medium font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80">
          By : {author}
        </p>
        <div className="flex gap-4 flex-wrap">
          <strong className="font-bold text-base leading-7 font-WorkSans text-Primary dark:text-Primary-dark items-center flex">
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
          <span className="text-base font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 flex items-center gap-2">
            <GrLocation /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-4 flex-wrap mt-1">
          <span className="text-base font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 flex items-center gap-2">
            <HiOutlineUsers /> Publisher: {publisher}
          </span>
          <span className="text-base font-WorkSans text-Primary dark:text-Primary-dark text-opacity-80 flex items-center gap-2">
            <HiOutlineDocumentChartBar /> Page {totalPages}
          </span>
        </div>
        <div className="my-2 border-b-[1px]"></div>
        <div className="flex gap-4 flex-wrap">
          <span className="text-base content-center text-blue-500 font-WorkSans rounded-full py-2 px-5 bg-blue-50">
            Category: {category}
          </span>
          <span className="text-base content-center text-yellow-500 font-WorkSans rounded-full py-2 px-5 bg-yellow-50">
            Rating: {rating}
          </span>
          <Link
            to={`/books/${bookId}`}
            className="text-lg text-white font-medium font-WorkSans rounded-full py-2 px-5 bg-green-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
BookRead.propTypes = {
  readData: PropTypes.any,
};
