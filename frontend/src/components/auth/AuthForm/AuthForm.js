import React, { useState, useEffect } from "react";
import "./AuthForm.css";
import { Link } from "react-router-dom";

const cx = (txt) => {
 return txt;
};
const AuthForm = ({
 kind,
 onChangeInput,
 userLoginId,
 userLoginPw,
 onLogin,
 onRegister,
 error,
}) => {
 const [rememberMe, setRememberMe] = useState(false);
 const handleChange = (e) => {
  const { name, value } = e.target;
  onChangeInput({ name, value });
 };
 const handleKeyPress = (e) => {
  if (e.key === "Enter") {
   switch (kind) {
    case "register":
     onRegister();
     return;
    case "login":
     onLogin();
     return;
    default:
     return;
   }
  }
 };
 const toggleRememberMe = (e) => {
  setRememberMe(!rememberMe);
  handleChange(e);
 };
 return (
  <div className="container">
   <div className="row justify-content-center">
    <div className="col-lg-5">
     <div className="card shadow-lg border-0 rounded-lg mt-5">
      <div className="card-header justify-content-center">
       <h3 className="font-weight-light my-4">
        {kind == "login" ? "로그인" : "회원가입"}
       </h3>
      </div>
      <div className="card-body">
       <form>
        <div className="form-group">
         <label className="small mb-1" htmlFor="userLoginId">
          아이디
         </label>
         <input
          className="form-control py-4"
          id="userLoginId"
          name="userLoginId"
          type="text"
          value={userLoginId}
          placeholder="youngrag.seo"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
         />
        </div>
        <div className="form-group">
         <label className="small mb-1" htmlFor="userLoginPw">
          비밀번호
         </label>
         <input
          className="form-control py-4"
          id="userLoginPw"
          name="userLoginPw"
          type="password"
          value={userLoginPw}
          placeholder="1234"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoComplete="off"
         />
        </div>
        {kind === "register" ? (
         <div className="form-group">
          <label className="small mb-1" htmlFor="userNm">
           사용자 이름
          </label>
          <input
           className="form-control py-4"
           id="userNm"
           name="userNm"
           type="text"
           placeholder="서영락"
           onChange={handleChange}
           onKeyPress={handleKeyPress}
          />
         </div>
        ) : null}
        <ul className="errorsList">
         {error.triggered && <li>{error.message}</li>}
        </ul>
        <div className="form-group">
         <div className="custom-control custom-checkbox">
          <input
           className="custom-control-input"
           id="rememberMe"
           name="rememberMe"
           type="checkbox"
           useref="rememberMe"
           onChange={toggleRememberMe}
           defaultChecked={rememberMe}
          />
          <label className="custom-control-label" htmlFor="rememberMe">
           로그인 유지하기
          </label>
         </div>
        </div>
        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
         <a className="small" href="password-basic.html">
          비밀번호를 잊으셨나요?
         </a>
         {kind === "register" ? (
          <div className="btn btn-primary" onClick={onRegister}>
           회원가입
          </div>
         ) : (
          <div className="btn btn-primary" onClick={onLogin}>
           로그인
          </div>
         )}
        </div>
       </form>
      </div>
      <div className="card-footer text-center">
       <div className="small">
        {/*<a href="register-basic.html">Need an account? Sign up!</a>*/}

        {kind === "register" ? (
         <Link to={`/auth/login`} className={cx("description")}>
          이미 계정을 가지고 계신가요?
         </Link>
        ) : (
         <Link to={`/auth/register`} className={cx("description")}>
          회원가입이 필요하시나요?
         </Link>
        )}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AuthForm;
