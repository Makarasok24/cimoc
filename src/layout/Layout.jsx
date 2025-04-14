
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
