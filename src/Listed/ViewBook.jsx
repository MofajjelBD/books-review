import BookImage from "./../assets/banner.png";

const ViewBook = () => {
  return (
    <div className="max-w-[1202px] mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1 grid">
          <div className="bg-base-200 rounded-2xl w-full lg:p-20 justify-center flex">
            <img className="h-full w-auto" src={BookImage}></img>
          </div>
        </div>
        <div className="col-span-1 grid items-center">
          <h2 className="card-title text-2xl font-bold font-Playfair text-Primary">
            The Catcher in the Rye
          </h2>
          <p className="text-base font-medium font-WorkSans text-Primary text-opacity-80 py-2">
            By : Awlad Hossain
          </p>
          <div className="py-3 border-y my-1">
            <span className="text-base font-medium font-WorkSans text-Primary text-opacity-80 flex gap-2">
              Fiction
            </span>
          </div>
          <div className="py-2">
            <p className="text-base font-WorkSans text-Primary leading-6 text-opacity-70">
              <span className="font-bold text-base font-WorkSans text-Primary">
                Review :
              </span>{" "}
              Sit amet consectetur. Interdum porta pulvinar non sit aliquam.
              Aenean pulvinar blandit vel non enim elementum penatibus
              pellentesque ac. Nec accumsan euismod nulla adipiscing lectus.
              Morbi elementum a auctor erat diam tellus. Fermentum faucibus
              nulla enim ornare.
              <br />
              Id neque neque pretium enim platea urna non dictum. Faucibus
              dignissim ridiculus nibh tristique massa non.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap py-2">
            <strong className="font-bold text-base leading-7 font-WorkSans text-Primary items-center flex">
              Tag
            </strong>
            <span className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50">
              Young Adult
            </span>
            <span className="text-base text-green-500 font-medium font-WorkSans rounded-full py-2 px-5 bg-green-50">
              Identity
            </span>
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
                    281
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Publisher:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    J.B Lippincott & Co.
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Year of Publishing:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    1996
                  </td>
                </tr>
                <tr className="border-0 my-2">
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-100 leading-7">
                    Rating:
                  </td>
                  <td className="p-0 py-1 font-WorkSans text-base text-opacity-60 leading-7 font-semibold">
                    4.8
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4">
            <a className="btn font-WorkSans text-Primary text-opacity-100 font-semibold text-lg border border-Primary border-opacity-30 bg-transparent px-5">
              Read
            </a>
            <a className="btn font-WorkSans text-white text-opacity-100 font-semibold text-lg border border-transparent bg-info px-5 hover:text-Primary">
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
