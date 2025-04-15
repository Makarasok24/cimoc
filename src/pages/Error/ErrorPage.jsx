// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-10">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl mt-4 mb-6 text-gray-800">Oops! Page not found</p>
            <p className="text-gray-600 mb-8">The page you are looking for doesn’t exist or has been moved.</p>
            <Link
                to="/"
                className="bg-primary text-white px-6 py-2 rounded-md hover:shadow-lg hover:shadow-primary/50 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
