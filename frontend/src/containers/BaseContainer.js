import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../store/modules/auth";
import { withRouter } from "react-router-dom";

export class BaseContainer extends React.Component {
 componentDidMount() {
  console.log("base mounted");
  this.checkUser();
 }
 componentDidUpdate(prevProps, prevState) {
  console.log("base updated");
  console.log(prevProps.logged);
  console.log(this.props.logged);
  console.log(
   "3" + prevProps.logged !== this.props.logged && !this.props.logged
  );
  if (prevProps.logged !== this.props.logged && !this.props.logged) {
   console.log("4");
   window.location.href = "/auth/login";
  }
 }

 checkUser = () => {
  const { checkUser, setUserTemp, history } = this.props;

  console.log("checkUser before ");
  // 먼저 localStorage에 값이 저장되있는지 확인, userInfo값이 있다면, 로그인을 한것으로 인식하고,
  // 바로 setUserTemp를 실시.
  // 이를 하는 이유는 새로고침 했을시, state가 초기화 되어 logged값도 false로 바뀌는데, 새로고침 했을시
  // 로그인을 유지하기 위함.

  if (
   localStorage.getItem("userInfo") &&
   JSON.parse(localStorage.getItem("userInfo")).userLoginId
  ) {
   console.log("checkUser middle");
   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   console.log("BaseContainer:25");
   console.log(userInfo);
   setUserTemp({
    userLoginId: userInfo.userLoginId,
    userNm: userInfo.userNm,
    userSeq: userInfo.userSeq,
    token: userInfo.token,
   });
   return;
  }

  // 만약 userInfo값이 localStorage에 없을때에는, api통신을 실시.
  checkUser();

  // 만약 checkUser가 실패 했다면, logged는 false로 바뀌므로, 로그인 페이지로 이동시킨다.
  // 또한, /auth/register에서는 /auth/login으로 이동할 필요가 없으므로, auth라는 path가 url에 포함될때는 제외시킨다
  if (!this.props.logged && !window.location.pathname.includes("auth")) {
   history.push("/auth/login");
  }
 };

 render() {
  return <div />;
 }
}

const mapStateToProps = (state) => ({
 logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => {
 return {
  checkUser: () => {
   dispatch(authActions.checkUser());
  },
  setUserTemp: ({ userLoginId, userNm, userSeq, token }) => {
   dispatch(authActions.setUserTemp({ userLoginId, userNm, userSeq, token }));
  },
 };
};

export default withRouter(
 connect(mapStateToProps, mapDispatchToProps)(BaseContainer)
);
