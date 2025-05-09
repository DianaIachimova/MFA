import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputElement from "../../elements/InputElement";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions/login.action";

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user?._id) {
      navigate(`/${i18n.language}/`);
    }
  }, [user, i18n.language, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(values.username, values.password));

    navigate(`/${i18n.language}/verify`, { state: values });
  };

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <div className="text-white text-4xl text-center w-full font-bold">Login</div>
      <div className="mt-12">
        <div className="w-5/12 border border-white rounded-2xl m-auto">
          <div className="text-3xl text-center text-white mt-5">
            {t("Returning Customers")}
          </div>

          <form className="w-8/12 m-auto" onSubmit={handleOnSubmit}>
            <InputElement
              onChange={handleOnChange}
              value={values.username}
              name="username"
              type="text"
              text="Username"
            />
            <InputElement
              onChange={handleOnChange}
              value={values.password}
              name="password"
              type="password"
              text="Password"
            />
            <button
              type="submit"
              className="w-full mt-5 h-[60px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500"
            >
              {t("Login")}
            </button>

            <div className="mt-10 mb-5 relative">
              <div className="text-white text-sm font-bold absolute -top-[10px] ml-[130px] bg-neutral-900 pl-2 pr-2">
                {t("Create an account")}
              </div>
              <div className="border-t-[1px] border-white w-full m-auto"></div>
            </div>

            <button
              type="button"
              onClick={() => navigate(`/${i18n.language}/register`)}
              className="w-full mt-5 mb-10 h-[60px] border border-gray-300 text-xl font-bold text-center rounded-md shadow-sm text-black bg-white hover:bg-gray-100"
            >
              {t("Register")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
