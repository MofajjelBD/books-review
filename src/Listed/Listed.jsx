import { IoIosArrowDown } from "react-icons/io";
import { BookRead } from "./BookRead";

export const Listed = () => {
  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <h2 className="font-WorkSans text-3xl text-Primary font-bold text-center py-6 bg-base-200 rounded-2xl">
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
              <a className="justify-center px-2 py-1">Rating</a>
            </li>
            <li className="grow">
              <a className="justify-center px-2 py-1">Number of pages</a>
            </li>
            <li className="grow">
              <a className="justify-center px-2 py-1">Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-12">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-auto after:py-2 after:px-4 after:text-lg after:font-WorkSans text-opacity-50 text-Primary focus:!text-opacity-80"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-0 border-t-[1px]"
        >
          <div className="py-8 gap-6 grid">
            <BookRead></BookRead>
            <BookRead></BookRead>
            <BookRead></BookRead>
            <BookRead></BookRead>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab h-auto after:py-2 after:px-4 after:text-lg after:font-WorkSans text-opacity-50 text-Primary focus:!text-opacity-80"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-0 border-t-[1px]"
        >
          Empty
        </div>
      </div>
    </div>
  );
};
