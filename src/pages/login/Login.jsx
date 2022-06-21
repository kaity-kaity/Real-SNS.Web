import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSです</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログイン</p>
            <input type="text" className="loginInput" placeholder="Eメール" />
            <input type="text" className="loginInput" placeholder="パスワード" />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">ログインを忘れた方はこちら</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
