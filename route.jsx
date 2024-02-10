import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Movies from "./Movies";
import LandingPage from "./src/LandingPage";
import Tv from "./Tv";
import Movie from "./pages/Movie";
import SingleTv from "./pages/SingleTv";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <Tv />,
        children: [
          {
            path: "tv/:id",
            element: <SingleTv />
          }
        ]
      },
      {
        path: "movie/:id",
        element: <Movie />
      }
    ]
  }
]);

export default routing;
