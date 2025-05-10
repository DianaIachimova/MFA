import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ModalPreviewProduct from "../components/Products/ModalPreviewProduct";
import { useTranslation } from "react-i18next";

const Homepage = lazy(() => import("../pages/Homepage"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Category = lazy(() => import("../pages/Category"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/LoginPage"));
const Register = lazy(() => import("../pages/Register"));
const News = lazy(() => import("../pages/News"));
const DetailsNews = lazy(() => import("../pages/DetailsNews"));
const Cart = lazy(() => import("../pages/Cart"));
const UserPage = lazy(() => import("../pages/UserPage"));

const RedirectToHomepage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    navigate(`/${i18n.language}`);
  }, []);
  return <div>Redirecting!</div>;
};

const routes = [
  {
    path: "/",
    component: RedirectToHomepage,
    exact: true,
  },
  {
    path: "/:locale/",
    component: Homepage,
    exact: true,
  },
  {
    path: "/:locale/catalog",
    component: Catalog,
    exact: true,
  },
  {
    path: "/:locale/catalog/:categoryId",
    component: Category,
    exact: true,
  },
  {
    path: "/:locale/products/:productId",
    component: ModalPreviewProduct,
    exact: true,
  },
  {
    path: "/:locale/login",
    component: Login,
    exact: true,
  },
  {
    path: "/:locale/register",
    component: Register,
    exact: true,
  },

  {
    path: "/:locale/profile",
    component: UserPage,
    exact: true
  },
  
  {
    path: "/:locale/news",
    component: News,
    exact: true,
  },
  {
    path: "/:locale/cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/:locale/news/:newsId",
    component: DetailsNews,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: true,
  },
];

export default routes;
