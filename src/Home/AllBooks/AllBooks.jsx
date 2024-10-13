import Book from "./Book.jsx";

export const AllBooks = () => {
  return (
    <div className="mt-24">
      <h2 className="font-bold text-4xl text-Primary font-Playfair text-center">
        Books
      </h2>
      <div className="flex flex-wrap gap-6 mt-8">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </div>
    </div>
  );
};
