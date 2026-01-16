import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

export const router = createBrowserRouter([
     {
          path: "/",
          Component: App,
          errorElement: <Error />,
          children: [
               {
                    index: true,
                    Component: Home,
               },
               {
                    path: "/about",
                    Component: About,
               },
               {
                    path: "/works",
                    Component: Works,
               },
               {
                    path: "/contact",
                    Component: Contact,
               },
               {
                    path: "/*",
                    Component: Error,
               },
          ],
     },
]);
