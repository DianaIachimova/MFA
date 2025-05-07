import React from "react";
import FooterElement from "../../elements/FooterElement";
import Subscribe from "../../elements/Subscribe";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFooterData } from "../../store/actions/footerData.action";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const footerData = useSelector((state) => state.footer);

  useEffect(() => {
    dispatch(getFooterData);
  }, []);

  return (
    <div>
      <div className="w-11/12 m-auto border-b-8 border-b-red-700"></div>

      <div className="mt-28 flex justify-evenly pb-16">
        {footerData.map((item) => (
          <FooterElement key={item._id} items={item.items} title={item.key} />
        ))}
        <Subscribe />
      </div>
    </div>
  );
}

export default Footer;
