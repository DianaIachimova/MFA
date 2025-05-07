import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Languages from "../../elements/Languages";
import LogoElement from "../../elements/LogoElement";
import IconLogin from "../Authentication/IconLogin";
import IconCart from "../Cart/IconCart";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import Partners from "./Partners";

function Menu() {
  const { i18n } = useTranslation();

  return (
    <div className="w-full bg-black bg-opacity-70 fixed z-10">
      <div className="flex justify-evenly mb-6">
        <Link to={`/${i18n.language}/`}>
          <LogoElement
            src="https://dulcinella.md/sites/default/files/logo_white_0.png"
            alt="logo"
            width="127"
            height="118"
            className="mt-16"
          />
        </Link>

        <div className="w-7/12 m-4 justify-start">
          <div className="flex justify-between">
            <Contacts />

            <Partners />

            <Languages />
          </div>

          <div className="flex justify-between mt-6">
            <Navigation />

            <div className="flex justify-between items-center">
              <IconLogin />
              <IconCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
