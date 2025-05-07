import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputElement from "../../elements/InputElement";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/login.action";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const item = e.target;

    setValues({ ...values, [item.name]: item.value });
  };

  useEffect(() => {
    if (user?._id) {
      navigate(`/${i18n.language}/`);
    }
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(values.username, values.password));
  };

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <div className="text-white text-4xl text-center w-full font-bold">
        Login
      </div>
      <div className="mt-12">
        <div className=" w-5/12 border border-white rounded-2xl m-auto">
          <div className="text-3xl text-center text-white mt-5">
            {t("Returning Customers")}
          </div>

          <form className="w-8/12 m-auto" onSubmit={handleOnSubmit}>
            <InputElement
              onChange={handleOnChange}
              value={values.username}
              name="username"
              type="username"
              text="Username"
            />
            <InputElement
              onChange={handleOnChange}
              value={values.password}
              name="password"
              type="password"
              text="Password"
            />

            <button className="w-full mt-5 h-[60px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500">
              Login
            </button>

            <div className="mt-10 mb-5 relative">
              <div className="text-white text-sm font-bold absolute -top-[10px] ml-[130px] bg-neutral-900 pl-2 pr-2">
                {t("Create an account")}
              </div>
              <div className="border-t-[1px] border-white w-full m-auto"></div>
            </div>

            <Link to={`/${i18n.language}/register`}>
              <button
                type="button"
                className="w-full mt-5 mb-10 h-[60px] border border-gray-300 text-xl font-bold text-center rounded-md shadow-sm text-black bg-white hover:bg-gray-100"
              >
                {t("Register")}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
