import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MoviesDetails from "./Pages/MoviesDetails/MoviesDetails";
import Login from "./Pages/Login/Login";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Form from "./Pages/Form/Form";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function Layout() {
  return (
    <>
      <Navbar />
      {/* Outlet component rendr any route [matches url pathname in browser] */}
      <Outlet />
      <Footer />
    </>
  );
}

function WithoutLayout() {
  return (
    <>
      {/* Outlet component rendr any route [matches url pathname in browser] */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
        // children: [
        //   {
        //     path: "/:movieId",
        //     element: <MoviesDetails />,
        //   },
        // ],
      },
      {
        path: "/movies/:movieId", // from component `/movies/${movie.id}`
        element: <MoviesDetails />,
      },
      {
        path: "/movies/:movieId", // from component `/movies/${movie.id}`
        element: <MoviesDetails />,
      },
      {
        path: "/products/:productId", // from component `/products/${product.id}`
        element: <ProductDetails />,
      },
      {
        path: "/form", 
        element: <Form />,
      },
    ],
  },
  {
    element: <WithoutLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
