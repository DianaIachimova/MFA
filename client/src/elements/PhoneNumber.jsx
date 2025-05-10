import React from "react";
import { useTranslation } from 'react-i18next';
import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";

const PhoneNumber = () => {
  const { t } = useTranslation();
  return (
    <div className="text-white">
      {t('chisinau')} <span className="text-xl ml-1">022 210-210</span>
      <ChevronDownIcon className="w-4 h-4 mb-1 ml-1" />
    </div>
  );
};

export default PhoneNumber;
