import React from "react";
import "./AuthForm.css";
import { Link } from "react-router-dom";

const cx = (txt) => {
  return txt;
};
const AuthForm = ({ kind, onChangeInput, username, password }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };
  return (
    <div className={cx("auth-form")}>
      <div className={cx("title")}>{kind.toUpperCase()}</div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>username</div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className={cx("auth-button")}>{kind.toUpperCase()}</div>
      {kind === "register" ? (
        <Link to={`/auth/login`} className={cx("description")}>
          if you already have account...
        </Link>
      ) : (
        <Link to={`/auth/register`} className={cx("description")}>
          if you don't have an account...
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
