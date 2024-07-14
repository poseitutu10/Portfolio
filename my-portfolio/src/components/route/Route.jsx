import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
