import { AllBooks } from "./AllBooks/AllBooks.jsx";
import Banner from "./Banner/Banner.jsx";

export const Home = () => {
  return (
    <div className="max-w-[1202px] mx-auto px-4">
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};
