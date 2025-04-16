import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/about/AboutUs";
import ErrorPage from "./pages/Error/ErrorPage";
import ExaminationPolicy from "./pages/programs/examinationPolicy/ExaminationPolicy";
import SamplePaper from "./pages/programs/samplePaper/SamplePaper";
import MockTest from "./pages/programs/mockTest/MockTest";
import PastPaper from "./pages/programs/pastPaper/PastPaper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/programs/examination-policy",
                element: <ExaminationPolicy />
            },
            {
                path: "/programs/sample-docs",
                element: <SamplePaper />
            },
            {
                path: "/programs/mock-test",
                element: <MockTest />
            },
            {
                path: "/programs/past-papers",
                element: <PastPaper />
            }
        ]
    },
])

export default router;