import React, { Component } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/auth/AuthForm";
import { withRouter } from "react-router-dom";
import * as authActions from "../store/modules/auth";

export class AuthContainer extends Component {
 componentDidMount() {
  this.initialize();
 }

 componentDidUpdate(prevProps, prevState) {
  // 하단에 AuthContainer를 withRouter로 감쌌기 때문에, history를 props로 이용할수 있습니다.
  const { history } = this.props;
  if (prevProps.kind !== this.props.kind) {
   this.initialize();
  }

  console.log("authcontainer " + prevProps.logged + " vs " + this.props.logged);
  if (prevProps.logged !== this.props.logged && this.props.logged) {
   // logged가 true가 되면 localStorage에 값을 저장합니다.
   localStorage.setItem(
    "userInfo",
    JSON.stringify({
     userLoginId: this.props.userInfo.userLoginId,
     userNm: this.props.userInfo.userNm,
     userSeq: this.props.userInfo.userSeq,
     token: this.props.userInfo.token,
    })
   );
   // 값을 저장후, main페이지로 이동시켜줍니다.
   history.push("/");
  }
 }

 initialize = () => {
  const { initializeInput, initializeError } = this.props;
  initializeError();
  initializeInput();
 };

 handleChangeInput = ({ name, value }) => {
  const { changeInput } = this.props;
  changeInput({ name, value });
 };

 handleLogin = () => {
  const { login } = this.props;
  login();
 };

 handleRegister = () => {
  const { register } = this.props;
  register();
 };
 render() {
  const { kind, loginUserId, loginUserPw, error } = this.props;
  const { handleChangeInput, handleLogin, handleRegister } = this;
  return (
   <AuthForm
    kind={kind}
    loginUserId={loginUserId}
    loginUserPw={loginUserPw}
    onChangeInput={handleChangeInput}
    onLogin={handleLogin}
    onRegister={handleRegister}
    error={error}
   />
  );
 }
}

const mapStateToProps = (state) => ({
 loginUserId: state.auth.form.loginUserId,
 loginUserPw: state.auth.form.loginUserPw,
 userInfo: state.auth.userInfo,
 logged: state.auth.logged,
 error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
 return {
  initializeInput: () => {
   dispatch(authActions.initializeInput());
  },
  changeInput: ({ name, value }) => {
   dispatch(authActions.changeInput({ name, value }));
  },
  initializeError: () => {
   dispatch(authActions.initializeError());
  },
  register: () => {
   dispatch(authActions.register());
  },
  login: () => {
   dispatch(authActions.login());
  },
 };
};

export default withRouter(
 connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
);
