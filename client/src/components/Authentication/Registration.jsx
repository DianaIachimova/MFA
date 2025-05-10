import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputElement from "../../elements/InputElement";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, resetRegistrationStep } from "../../store/actions/register.action";
import LoadingSpinner from "../LoadingSpinner";

function Registration() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    token: ''
  });

  const register = useSelector(state => state.register);
  const user = useSelector(state => state.user);
  const { error, loading, qrCode, success, registrationStep } = register;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, token } = formData;
    dispatch(userRegister(username, email, password, confirmPassword, token));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    navigate(`/${i18n.language}/login`);
  };

  useEffect(() => {
    if (registrationStep === 3 && success && user._id) {
      navigate(`/${i18n.language}/`);
    }
  }, [navigate, i18n.language, registrationStep, success, user._id]);

  useEffect(() => {
    return () => {
      dispatch(resetRegistrationStep());
    };
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <div className="text-white text-4xl text-center w-full font-bold">
        {registrationStep === 2 ? t("Setup 2FA") : t("Register")}
      </div>
      <div className="mt-12">
        <div className="w-5/12 border border-white rounded-2xl m-auto">
          <div className="text-3xl text-center text-white mt-5">
            {registrationStep === 2 ? t("Secure your account") : null}
          </div>

          {error && (
            <div className="text-red-500 text-center mt-4 px-4">
              {error}
            </div>
          )}

          <form className="w-8/12 m-auto" onSubmit={handleSubmit}>
            {registrationStep === 1 && (
              <>
                <InputElement
                  onChange={handleChange}
                  value={formData.username}
                  name="username"
                  type="text"
                  text={t("Username")}
                  required
                />
                <InputElement
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  text={t("Email")}
                  required
                />
                <InputElement
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  text={t("Password")}
                  required
                  minLength={6}
                />
                <InputElement
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  text={t("Confirm Password")}
                  required
                />
              </>
            )}

            {registrationStep === 2 && qrCode && (
              <div className="mt-4 text-center">
                <p className="text-white mb-2">{t("Scan this QR code with your authenticator app")}</p>
                <img src={qrCode} alt="QR Code" className="mx-auto" />
                <InputElement
                  onChange={handleChange}
                  value={formData.token}
                  name="token"
                  type="text"
                  text={t("Enter 2FA Code")}
                  placeholder={t("Enter the code from your authenticator app")}
                  maxLength={6}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-5 h-[60px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? t("Loading...") : registrationStep === 2 ? t("Verify") : t("Register")}
            </button>

            {registrationStep === 1 && (
              <>
                <div className="mt-10 mb-5 relative">
                  <div className="text-white text-sm font-bold absolute -top-[10px] ml-[130px] bg-neutral-900 pl-2 pr-2">
                    {t("Already have an account?")}
                  </div>
                  <div className="border-t-[1px] border-white w-full m-auto"></div>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full mt-5 mb-10 h-[60px] border border-gray-300 text-xl font-bold text-center rounded-md shadow-sm text-black bg-white hover:bg-gray-100"
                >
                  {t("Login")}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
