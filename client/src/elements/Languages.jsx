import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const languages = [
  { key: "en", name: "En" },
  { key: "ru", name: "Ru" },
  { key: "ro", name: "Ro" },
];

function Languages() {
  const location = useLocation();
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-around w-20 space-x-2">
      {languages.map((item) => (
        <Link
          key={item.key}
          to={`/${item.key}/${location.pathname.split("/").splice(2).join("/")}`}
          onClick={() => i18n.changeLanguage(item.key)}
          className={classNames(
            
            "max-h-[35px] text-lg font-thin text-opacity-50 hover:text-yellow-300 px-2 py-1 rounded-md transition",
            i18n.language === item.key
              ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
              : "text-slate-300"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Languages;
