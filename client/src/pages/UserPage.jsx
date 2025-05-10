import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
import { userLogout } from '../store/actions/login.action';
import { resetCart } from '../store/actions/resetCart.actions';
import LogoutIcon from "@heroicons/react/outline/LogoutIcon";

const UserPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, email } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(resetCart());
    navigate(`/${i18next.language}/`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-white font-bold mb-8">{t('profile')}</h1>
      
      <div className="bg-neutral-900 rounded-lg p-6 mb-8">
        <h2 className="text-2xl text-white mb-4">{t('personal_information')}</h2>
        <div className="space-y-4">
          <div>
            <label className="text-gray-400">{t('username')}:</label>
            <p className="text-white">{username}</p>
          </div>
          <div>
            <label className="text-gray-400">{t('email')}:</label>
            <p className="text-white">{email}</p>
          </div>
        </div>

        {/* 2FA Settings section can be added here */}
        
        <div className="pt-8 border-t border-gray-700 mt-8">
          <button
            onClick={handleLogout}
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <LogoutIcon className="h-6 w-6 mr-2" />
            <span>{t("logout")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage; 