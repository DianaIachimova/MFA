import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return <div className="py-60 text-center text-5xl text-white">{t('not_found')}</div>;
};

export default NotFound;
