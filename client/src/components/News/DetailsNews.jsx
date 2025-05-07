import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DetailsNews = (props) => {
  const { t, i18n } = useTranslation();

  const { title, detail, imgUrl } = props;
  return (
    <div>
      <div
        className="w-11/12 m-auto relative bg-cover bg-center flex h-[850px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div class="bg-gradient-to-t from-black to-transparent absolute w-full h-full bottom-0"></div>
        <div
          className="w-9/12 text-[80px] leading-tight text-white font-semibold z-10 flex items-end mb-24 ml-20"
          style={{ textShadow: `1px 1px black` }}
        >
          {t(title)}
        </div>
      </div>
      <p className="w-4/5 text-white text-xl font-light m-auto mt-16 leading-relaxed">
        {t(detail)}
      </p>
      <Link to={`/${i18n.language}/news`}>
        <div className="flex justify-center items-center m-auto w-96 h-[78px] mt-16 mb-16 font-bold text-2xl cursor-pointer border-2 border-white rounded-lg text-white transition-colors group hover:bg-amber-400 group hover:border-amber-400 hover:text-black">
          {t("Back to news")}
        </div>
      </Link>
    </div>
  );
};

export default DetailsNews;
