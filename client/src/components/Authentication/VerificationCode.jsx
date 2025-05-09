import React, { useState, useRef, useEffect } from "react";
import InputElement from "../../elements/InputElement";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { codeVerify } from "../../store/actions/login.action";

function Verification() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?._id) {
      navigate(`/${i18n.language}/`);
    }
  }, [i18n.language, navigate, user]);

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState(
    t("We have sent a confirmation code to your email. If you haven't received it, please request a new one.")
  );
  const inputsRef = useRef([]);

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (value.length === 6 && index === 0) {
      const newCode = value.split("").slice(0, 6);
      setCode(newCode);
      inputsRef.current[5]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    setMessage(t("A new code has been sent to your email."));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length === 6) {
      dispatch(codeVerify(verificationCode));
    }
  };

  return (
    <div className="m-auto w-11/12 mt-10 mb-32">
      <div className="text-white text-4xl text-center w-full font-bold">
        {t("Code Verification")}
      </div>
      <div className="mt-12">
        <div className="w-5/12 border border-white rounded-2xl m-auto p-6">
          <p className="text-white text-center mb-4">{message}</p>
          <form className="w-8/12 m-auto text-center" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2">
              {code.map((num, index) => (
                <InputElement
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-2xl text-center border rounded-md bg-gray-100 focus:outline-none"
                  value={num}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full mt-5 h-[60px] min-w-[30px] border border-white text-xl font-bold text-center rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500"
            >
              {t("Confirm")}
            </button>
            <button
              type="button"
              className="w-full mt-5 h-[40px] text-sm text-white underline"
              onClick={handleResendCode}
            >
              {t("Request a new code")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verification;
