import React from "react";
import { useTranslation } from "react-i18next";

function ItemMenu(props) {
  const { name } = props;
  const { t } = useTranslation();
  return (
    <div>
      <button className="text-white text-base font-thin hover:text-yellow-300 mb-2">
        {t(name)}
      </button>
    </div>
  );
}

export default ItemMenu;
