import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "./Register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <h3 className="signupLogo">Real SNS</h3>
          <span className="signupDesc">本格的なSNSです</span>
        </div>
        <div className="signupRight">
          <form className="signupBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="signupMsg">新規登録</p>
            <input
              type="text"
              className="signupInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="signupInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="signupInput"
              placeholder="パスワード"
              minLength="6"
              required
              ref={password}
            />
            <input
              type="password"
              className="signupInput"
              placeholder="確認用パスワード"
              required
              ref={passwordConfirmation}
            />
            <button className="signupButton" type="submit">
              サインアップ
            </button>
            <button className="siginuploginButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
