import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Success from "./pages/Success";
import Fail from "./pages/Fail";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/fail",
        element: <Fail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='font-bodyFont m-auto mt-2'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
