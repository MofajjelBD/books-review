import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./assets/Root/Root.jsx";
import { Home } from "./Home/Home.jsx";
import { ErrorPage } from "./ErrorPage/ErrorPage.jsx";
import { Listed } from "./Listed/Listed.jsx";
import { PageRead } from "./PageRead/PageRead.jsx";
import { ViewBook } from "./BookView/ViewBook.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "/listed",
        element: <Listed></Listed>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "/read",
        element: <PageRead></PageRead>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "/books/:id",
        element: <ViewBook></ViewBook>,
        loader: () => fetch("/BookData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
