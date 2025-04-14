import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/about/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            }
        ]
    },
])

export default router;