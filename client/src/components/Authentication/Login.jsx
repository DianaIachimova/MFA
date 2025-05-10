import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputElement from "../../elements/InputElement";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions/login.action";
import LoadingSpinner from "../LoadingSpinner";

const Login = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    token: ''
  });

  const user = useSelector(state => state.user);
  const { error, twoFactorRequired, isAuthenticated, _id } = user;
  const [isLoading, setIsLoading] = useState(false);

  const isActuallyLoading = isLoading && (formData.username || formData.password || formData.token);

  useEffect(() => {
    if (_id) {
      navigate(`/${i18n.language}/`);
    }
  }, [isAuthenticated, twoFactorRequired, navigate, i18n.language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, token } = formData;
    dispatch(userLogin(username, password, token));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    navigate(`/${i18n.language}/register`);
  };

  if (isActuallyLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <div className="text-white text-4xl text-center w-full font-bold">
        {twoFactorRequired ? t("Two-Factor Authentication") : t("Login")}
      </div>
      <div className="mt-12">
        <div className="w-5/12 border border-white rounded-2xl m-auto">
          <div className="text-3xl text-center text-white mt-5">
            {twoFactorRequired ? t("Enter 2FA Code") : t("Returning Customers")}
          </div>

          {error && (
            <div className="text-red-500 text-center mt-4">
              {t(error)}
            </div>
          )}

          <form className="w-8/12 m-auto" onSubmit={handleSubmit}>
            {!twoFactorRequired ? (
              <>
                <InputElement
                  onChange={handleChange}
                  value={formData.username}
                  name="username"
                  type="text"
                  text={t("Username")}
                />
                <InputElement
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  text={t("Password")}
                />
              </>
            ) : (
              <div className="mt-4">
                <p className="text-white mb-4 text-center">
                  {t("Please enter the verification code from your authenticator app")}
                </p>
                <InputElement
                  onChange={handleChange}
                  value={formData.token}
                  name="token"
                  type="text"
                  text={t("2FA Code")}
                  placeholder={t("Enter 6-digit code")}
                  maxLength={6}
                  autoFocus
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-5 h-[60px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50"
              disabled={isActuallyLoading || (twoFactorRequired && !formData.token)}
            >
              {isActuallyLoading 
                ? t("Loading...") 
                : twoFactorRequired 
                  ? t("Verify") 
                  : t("Login")
              }
            </button>

            {!twoFactorRequired && (
              <>
                <div className="mt-10 mb-5 relative">
                  <div className="text-white text-sm font-bold absolute -top-[10px] ml-[130px] bg-neutral-900 pl-2 pr-2">
                    {t("Create an account")}
                  </div>
                  <div className="border-t-[1px] border-white w-full m-auto"></div>
                </div>

                <button
                  type="button"
                  onClick={handleRegister}
                  className="w-full mt-5 mb-10 h-[60px] border border-gray-300 text-xl font-bold text-center rounded-md shadow-sm text-black bg-white hover:bg-gray-100"
                >
                  {t("Register")}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
