import { Link } from "react-router-dom";
import BannerImage from "./../../assets/banner.png";
const Banner = () => {
  return (
    <div className="mt-8">
      <div className="rounded-3xl bg-base-200">
        <div className="grid grid-cols-12 gap-4 lg:p-28 p-6">
          <div className="col-span-12 lg:col-span-7 items-center flex">
            <div className="items-center">
              <h1 className="text-3xl font-bold sm:text-[56px] font-Playfair text-Primary text-opacity-100 dark:text-opacity-100 font-Mulish leading-10 sm:leading-[84px]">
                Books to freshen up your bookshelf
              </h1>
              <div className="">
                <Link
                  to="/listed"
                  className="mt-12 btn font-WorkSans text-white text-opacity-100 font-bold text-xl border border-transparent bg-green-500 px-5 hover:bg-green-500"
                >
                  View The List
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 items-center justify-end flex">
            <img src={BannerImage} alt="Image for banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
