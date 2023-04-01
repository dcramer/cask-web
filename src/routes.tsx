import Root from "./routes/root";
import ErrorPage from "./error-page";
import Checkin, { loader as checkinLoader } from "./routes/checkin";
import Activity from "./routes/activity";
import Search from "./routes/search";
import type { RouteObject } from "react-router-dom";

export default [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Activity /> },
      {
        path: "b/:bottleId/checkin",
        element: <Checkin />,
        loader: checkinLoader,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
] as RouteObject[];
