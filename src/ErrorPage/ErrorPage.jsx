import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-error dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Somethings missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can not find that page. You will find lots to explore on
              the home page.
            </p>
            <Link to="/">
              <button className="btn btn-active btn-ghost">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
