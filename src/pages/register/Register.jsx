import React from "react";
import "./Register.css"

const Register = () => {
  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <h3 className="signupLogo">Real SNS</h3>
          <span className="signupDesc">本格的なSNSです</span>
        </div>
        <div className="signupRight">
          <div className="signupBox">
            <p className="signupMsg">新規登録</p>
            <input type="text" className="signupInput" placeholder="ユーザー名" />
            <input type="text" className="signupInput" placeholder="Eメール" />
            <input type="text" className="signupInput" placeholder="パスワード" />
            <input type="text" className="signupInput" placeholder="確認用パスワード" />
            <button className="signupButton">サインアップ</button>
            <button className="loginButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
