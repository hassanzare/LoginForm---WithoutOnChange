import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showCategory, setShowCategory] = useState("true");
  return (
    <>
      {showCategory && (
        <div className="container__login">
          <div className="login-form">
            <span
              className="closebtn-login"
              onClick={() => setShowCategory(!"true")}
            >
              &times;
            </span>
            <div className="title">
              <h5> ورود یا ثبت نام</h5>
              <h6>برای ادامه شماره موبایل خودراواردکنید.</h6>
            </div>
            <input
              className="input-number"
              type="text"
              placeholder="شماره موبایل"
            />
            <input
              type="text"
              className="input-verifycode"
              placeholder="کدتایید"
            />
            <h6>
              استفاده از خدمات به معنای پذیزش قوانین و مقررات این سرویس است.
            </h6>
            <div className="input-groups">
              <Link to="/admin" style={{ textDecoation: "none" }}>
                <input
                  className="input-first"
                  type="submit"
                  value={"تاییدودریافت کد"}
                />
              </Link>
              <input
                className="input-second"
                type="submit"
                value={"ورودباکلمه ورود"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
