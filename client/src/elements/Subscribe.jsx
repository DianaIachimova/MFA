import React from "react";
import LogoElement from "./LogoElement";
import { useTranslation } from "react-i18next";

function Subscribe() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-white text-xl mb-6">{t('subscribe')}</div>
      <input className="w-64 h-12 bg-white pl-4" placeholder="Message"></input>
      <button className="w-32 h-14 bg-black border-2 border-neutral-700 rounded-md text-white ml-2">
        Subscribe
      </button>
      <div className="mt-8">
        <LogoElement src="https://www.dulcinella.ro/images/logo_dulcinella_brown_100px.png" width="100px" />
      </div>
    </div>
  );
}

export default Subscribe;
