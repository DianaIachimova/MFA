import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import { userAuth } from "../store/actions/login.action";
import {
  getContactsData,
  getMenuData,
  getPartnersData,
} from "../store/actions/menuData.action";

function Layout(props) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomepage = [`/${i18n.language}`, `/${i18n.language}/`].includes(
    location.pathname
  );

  useEffect(() => {
    dispatch(userAuth);
    dispatch(getMenuData);
    dispatch(getContactsData);
    dispatch(getPartnersData);
  }, []);

  return (
    <div className="bg-neutral-900 relative">
      <Menu key={location.pathname} />

      <div className={"min-h-screen" + (isHomepage ? "" : " pt-44")}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
