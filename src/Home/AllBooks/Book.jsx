import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
const Book = ({ BookData }) => {
  const { image, bookName, author, category, rating, tags } = BookData;
  return (
    <>
      <Link
        to="books/:1"
        className="card bg-base-100 w-[374px] shadow-xl border border-gray rounded-3xl dark:bg-slate-800"
      >
        <figure className="px-6 py-6 w-full h-full !items-start">
          <div className="bg-base-200 rounded-[16px] h-[230px] w-full p-8 justify-center flex w-full">
            <img className="h-full w-auto" src={image}></img>
          </div>
        </figure>
        <div className="card-body font-Mulish pb-6 pt-0 px-6 justify-start">
          <div className="flex gap-4 flex-wrap">
            {tags.map((tags, Index) => (
              <span
                key={Index}
                className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50"
              >
                {tags}
              </span>
            ))}
            <span className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50">
              Young Adult
            </span>
            <span className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50">
              Identity
            </span>
          </div>
          <h2 className="card-title text-2xl font-bold font-Playfair text-Primary">
            {bookName}
          </h2>
          <p className="text-base font-medium font-WorkSans text-Primary text-opacity-80">
            By : {author}
          </p>
          <div className="mt-4 border-dashed border-b-2"></div>
          <div className="flex justify-between flex-wrap py-3">
            <span className="text-base font-medium font-WorkSans text-Primary text-opacity-80 flex gap-2">
              {category}
            </span>
            <span className="text-base font-medium font-WorkSans text-Primary text-opacity-80 flex items-center gap-2">
              {rating}
              <FaRegStar />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
Book.propTypes = {
  BookData: PropTypes.any,
};
export default Book;
