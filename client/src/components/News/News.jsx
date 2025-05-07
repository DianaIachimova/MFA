import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const News = (props) => {
  const { t, i18n } = useTranslation();
  const { data, title, detail, imgUrl } = props;

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat bg-gray-100 hover:bg-gray-200 h-[450px] flex"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div class="bg-gradient-to-t from-black to-transparent absolute w-full h-full bottom-0"></div>

      <div className="w-full flex relative justify-center items-end mb-16">
        <div className="w-7/12" style={{ textShadow: `2px 1px black` }}>
          <div className="text-2xl text-white">{data}</div>
          <div className="text-[55px] text-white font-medium leading-tight">
            {t(title)}
          </div>
          <div className="text-xl text-yellow-400 font-thin">{t(detail)}</div>
        </div>

        <div className="flex justify-center items-center w-48 h-[72px] cursor-pointer border-2 border-white rounded-lg text-white text-xl transition-colors group hover:bg-amber-400 group hover:border-amber-400 hover:text-black">
          {t("SEE MORE")}
          <ChevronRightIcon className="w-7 h-7 text-white group-hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default News;
