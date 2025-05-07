import React from "react";
import { useTranslation } from "react-i18next";

const EmptyCartModal = () => {
  const { t } = useTranslation();
  return (
    <div className="text-yellow-400 font-bold p-4">{t("empty-basket")}</div>
  );
};

export default EmptyCartModal;
