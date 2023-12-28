import Main from "../layout/Main";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
  ]);
  export default router;