import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import InputElement from "../../elements/InputElement";
import api from "../../services/api";

function Registration() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const item = e.target;

    setValues({ ...values, [item.name]: item.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", {
        email: values.email,
        username: values.username,
        password: values.password,
      });

      navigate(`/${i18n.language}/login`);
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <Link to={`/${i18n.language}/login`}>
        {" "}
        <span className="text-white text-base font-thin ml-[210px] hover:text-yellow-300 mb-2">
        {t("Back to sign")}
        </span>
      </Link>
      <div className="text-white text-4xl text-center w-full font-bold">
        {t("Create an account")}
      </div>

      <div className="mt-12">
        <div className=" w-8/12 border border-white rounded-2xl m-auto">
          <div className="text-3xl text-center text-white mt-5">
            {t("Registration")}
          </div>

          <form className="w-5/12 m-auto" onSubmit={handleOnSubmit}>
            <InputElement
              onChange={handleOnChange}
              value={values.username}
              name="username"
              type="text"
              text="Username"
            />
            <InputElement
              onChange={handleOnChange}
              value={values.email}
              name="email"
              type="email"
              text="Email"
            />
            <InputElement
              onChange={handleOnChange}
              value={values.password}
              name="password"
              type="password"
              text="Password"
            />
            <InputElement
              onChange={handleOnChange}
              value={values.confirmPassword}
              name="confirmPassword"
              type="password"
              text="Confirm password"
            />

            <button className="w-full mt-5 mb-10 h-[60px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500">
              {t("Sent")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
