import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import Shimmer from "./src/components/Shimmer";
import ThemeContext from "./src/utils/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./src/redux/AppStore";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Provider store={appStore}>
      <ThemeContext.Provider value={{theme: theme, setTheme}}>
        <div>
          <Header />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
};

// Lazy load components
const Body = lazy(() => import("./src/components/Body"));
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/RestuarantMenu"));

// Route configurations with lazy loading
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restuarant/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
