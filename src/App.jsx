import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useTranslation } from "react-i18next";
import GoToTop from "./components/GoToTop";
const App = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div className={lang === "kh" ? "font-kh" : "font-en"}>
      <GoToTop />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
