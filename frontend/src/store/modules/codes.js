import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";

const GET_CODES = "codes/GET_CODE";
const GET_CODES_FAILURE = "codes/GET_CODES_FAILURE";
const GET_CODES_SUCCESS = "codes/GET_CODES_SUCCESS";

export const getCodes = () => ({
 type: GET_CODES,
});
export const getCodesSuccess = ({ codes }) => ({
 type: GET_CODES_SUCCESS,
 payload: {
  codes,
 },
});
export const getCodesFailure = (error) => ({
 type: GET_CODES_FAILURE,
 payload: {
  error,
 },
});
const getCodesEpic = (action$, state$) => {
 return action$.pipe(
  ofType(GET_CODES),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
   const token = localStorage.getItem("codes")
    ? JSON.parse(localStorage.getItem("userInfo")).token
    : null;
   return ajax
    .get(`/v1/code`, {
     "Content-Type": "application/json",
     Authorization: `token ${token}`,
    })
    .pipe(
     map((response) => {
      const codes = response.response.list;
      return getCodesSuccess({ codes });
     }),
     catchError((error) =>
      of({
       type: GET_CODES_FAILURE,
       payload: error,
       error: true,
      })
     )
    );
  })
 );
};

const initialState = {
 codes: [],
 // 에러 관련 state 등록.
 error: {
  triggered: false,
  message: "",
 },
};
export const codes = (state = initialState, action) => {
 switch (action.type) {
  case GET_CODES_SUCCESS:
   return {
    ...state,
    codes: action.payload.codes,
   };
  case GET_CODES_FAILURE:
   return {
    ...state,
    error: {
     triggered: true,
     message: "코드를 조회하는데 실패했습니다.",
    },
   };
  default:
   return state;
 }
};

export const codesEpics = {
 getCodesEpic,
};
