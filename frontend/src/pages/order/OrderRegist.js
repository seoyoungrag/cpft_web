import React from "react";
import MainStructure from "components/structure/MainStructure";
import "./OrderRegist.css";
import $ from "jquery";
import { Component } from "react";
import axios from "axios";

import ReactDOM from "react-dom";

class OrderRegist extends Component {
 constructor(props) {
  super(props);
  this.state = {
   jusos: null,
   loading: false,
  };

  this._onChangeHandler = async (e) => {
   $("#registOrderWorkingArea").siblings("div.awesomplete").show();
   this._searchJusos(e.target.value);
  };
  this._searchJusos = async (value) => {
   if (value.length > 0) {
    this.setState({ loading: true });
    const res = await axios(
     "http://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=" +
      value +
      "&confmKey=devU01TX0FVVEgyMDIwMDYxNjA3NTczNzEwOTg2ODc=&resultType=json"
    );

    const geoResult =
     (await res.data.results) &&
     res.data.results.juso &&
     res.data.results.juso.map((a) => {
      return {
       label: a.siNm + " " + a.sggNm + " " + a.emdNm,
       value: a.siNm + " " + a.sggNm + " " + a.emdNm,
       siNm: a.siNm,
       sggNm: a.sggNm,
       emdNm: a.emdNm,
      };
     });
    if (!geoResult || geoResult.length == 0) {
     return;
    }
    //var distinctGeoResult = [...new Set(geoResult)];
    geoResult = this._removeDuplicate(geoResult, "label");
    console.log(geoResult);
    geoResult = geoResult.filter((e) => {
     return e.label.indexOf($("#registOrderWorkingArea").val()) > -1;
    });
    //시를 검색하고 싶을 때
    const siNmList = geoResult.filter((e) => {
     if (e.siNm.indexOf($("#registOrderWorkingArea").val()) > -1) {
      e.label = e.siNm;
      e.sggNm = "";
      e.emdNm = "";
      return true;
     }
    });
    //시군구를 검색하고 싶을 때
    const sggNmList = geoResult.filter((e) => {
     if (e.sggNm.indexOf($("#registOrderWorkingArea").val()) > -1) {
      e.label = e.siNm + " " + e.sggNm;
      e.sggNm = "";
      return true;
     }
    });
    //동을 검색하고 싶을 때
    const emdNmList = geoResult.filter((e) => {
     return e.emdNm.indexOf($("#registOrderWorkingArea").val()) > -1;
    });
    //시 따로 시군구 따로 동 따로 중복 없앤 후 다 보여주자
    siNmList = this._removeDuplicate(siNmList, "siNm");
    sggNmList = this._removeDuplicate(sggNmList, "sggNm");
    emdNmList = this._removeDuplicate(emdNmList, "emdNm");
    console.log(siNmList);
    console.log(sggNmList);
    console.log(emdNmList);
    const jusoList = siNmList.concat(sggNmList, emdNmList);
    console.log(jusoList);
    this.setState({ jusos: jusoList, loading: false });
   }
  };
  this._removeDuplicate = (array, fieldNm) => {
   var obj = {};

   for (var i = 0, len = array.length; i < len; i++) {
    obj[array[i][fieldNm]] = array[i];
   }
   array = new Array();
   for (var key in obj) {
    array.push(obj[key]);
   }
   return array;
  };
  this._onclickJuso = (e) => {
   console.log(e.target.dataset);
   $("#registOrderWorkingArea").val(e.target.innerText);
   $("#registOrderWorkingArea").siblings("div.awesomplete").hide();
  };
 }

 get renderJusos() {
  let jusos = <div className="awesomplete"></div>;
  if (this.state.jusos && this.state.jusos.length > 0) {
   jusos = (
    <div className="awesomplete">
     <ul>
      {this.state.jusos.map((e, i) => {
       return (
        <li
         onClick={this._onclickJuso}
         key={i}
         data-sinm={e.siNm}
         data-sggnm={e.sggNm}
         data-emdnm={e.emdNm}
        >
         {e.label}
        </li>
       );
      })}
     </ul>
    </div>
   );
  } else {
   jusos = (
    <div className="awesomplete">
     <ul>
      <li>검색된 주소가 없습니다.</li>
     </ul>
    </div>
   );
  }

  return jusos;
 }
 componentDidMount() {
  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
   target: "#stickyNav",
   offset: 1000,
  });
  // Scrolls to an offset anchor when a sticky nav link is clicked
  $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
   if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
   ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
     $("html, body").animate(
      {
       scrollTop: target.offset().top - 81,
      },
      200
     );
     return false;
    }
   }
  });
 }

 render() {
  return (
   <MainStructure>
    <main>
     <div className="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
      <div className="container-fluid">
       <div className="page-header-content">
        <h1 className="page-header-title">
         <div className="page-header-icon">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="feather feather-edit-3"
          >
           <path d="M12 20h9"></path>
           <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
         </div>
         <span>오더 등록</span>
        </h1>
        <div className="page-header-subtitle">오더를 등록합니다.</div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="row">
       <div className="col-lg-12">
        <div id="default">
         <div className="card mb-4">
          <div className="card-header">모집 요강</div>
          <div className="card-body">
           <div className="sbp-preview">
            <div className="sbp-preview-content">
             <form>
              <div className="form-group">
               <label htmlFor="customRadio1">모집 유형</label>

               <div className="custom-control custom-radio">
                <input
                 className="custom-control-input"
                 id="customRadio1"
                 type="radio"
                 name="customRadio"
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                 고정
                </label>
               </div>
               <div className="custom-control custom-radio">
                <input
                 className="custom-control-input"
                 id="customRadio2"
                 type="radio"
                 name="customRadio"
                />
                <label className="custom-control-label" htmlFor="customRadio2">
                 지입차주
                </label>
               </div>
               <div className="custom-control custom-radio">
                <input
                 className="custom-control-input"
                 id="customRadio3"
                 type="radio"
                 name="customRadio"
                />
                <label className="custom-control-label" htmlFor="customRadio3">
                 용차
                </label>
               </div>
              </div>

              <div className="form-group">
               <label htmlFor="orderRegistCarType">운행차량</label>

               <div className="row mb-4">
                <div className="col-6">
                 <div className="card">
                  <div className="card-header">차종</div>
                  <div className="card-body">
                   <input
                    className="form-control"
                    id="orderRegistCarType"
                    type="text"
                    placeholder="탑차"
                    key="orderRegistCarType"
                   />
                  </div>
                 </div>
                </div>
                <div className="col-6">
                 <div className="card">
                  <div className="card-header">톤수</div>
                  <div className="card-body">
                   <input
                    className="form-control"
                    id="orderRegistCarTons"
                    type="text"
                    placeholder="2톤"
                    key="orderRegistCarTons"
                   />
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div className="form-group">
               <label htmlFor="exampleFormControlInput3">배송 품목</label>
               <input
                className="form-control"
                id="exampleFormControlInput3"
                type="email"
                placeholder="ex) 박스 일 40건"
                key="exampleFormControlInput3"
               />
              </div>
              <div className="form-group">
               <label htmlFor="orderRegistPayAmt">급여</label>
               <input
                className="form-control"
                id="orderRegistPayAmt"
                type="email"
                placeholder="ex) 500만원"
                key="orderRegistPayAmt"
               />
              </div>
              <div className="form-group">
               <label htmlFor="orderRegistPayFullTrue">완제/무제</label>

               <div className="custom-control custom-radio">
                <input
                 className="custom-control-input"
                 id="orderRegistPayFullTrue"
                 type="radio"
                 name="orderRegistIsFayFull"
                />
                <label
                 className="custom-control-label"
                 htmlFor="orderRegistPayFullTrue"
                >
                 완제
                </label>
               </div>
               <div className="custom-control custom-radio">
                <input
                 className="custom-control-input"
                 id="orderRegistPayFullFalse"
                 type="radio"
                 name="orderRegistIsFayFull"
                />
                <label
                 className="custom-control-label"
                 htmlFor="orderRegistPayFullFalse"
                >
                 무제
                </label>
               </div>
              </div>
              <div className="form-group">
               <label htmlFor="registOrderWorkingArea">지역</label>
               <input
                value={this.state.value}
                onChange={this._onChangeHandler}
                className="form-control"
                id="registOrderWorkingArea"
                type="text"
                placeholder="서이천물류센터"
                key="registOrderWorkingArea"
                autoComplete="off"
               />
               {this.renderJusos}
              </div>
              <div className="form-group">
               <label htmlFor="registOrderWorkingAreaEtcMatter">
                지역 기타입력사항
               </label>
               <input
                className="form-control"
                id="registOrderWorkingAreaEtcMatter"
                type="text"
                placeholder="ex) 기타입력사항"
                key="registOrderWorkingAreaEtcMatter"
               />
              </div>
              <div className="form-group">
               <label htmlFor="exampleFormControlInput5">운행구간</label>
               <input
                className="form-control"
                id="exampleFormControlInput5"
                type="email"
                placeholder="ex) 서울시"
                key="exampleFormControlInput5"
               />
              </div>
              <div className="form-group">
               <label htmlFor="orderRegistWorkType">근무요일</label>
               <select className="form-control" id="orderRegistWorkType">
                <option>선택</option>
                <option>주6일</option>
                <option>주5일</option>
                <option>직접입력</option>
               </select>
              </div>
              <div className="form-group">
               <label htmlFor="orderRegistWorkDayDetail">상세요일 선택</label>
               <div className="col-12">
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailMon"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailMon"
                 >
                  월
                 </label>
                </div>

                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailTue"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailTue"
                 >
                  화
                 </label>
                </div>
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailWed"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailWed"
                 >
                  수
                 </label>
                </div>
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailThu"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailThu"
                 >
                  목
                 </label>
                </div>
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailFri"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailFri"
                 >
                  금
                 </label>
                </div>
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailSat"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailSat"
                 >
                  토
                 </label>
                </div>
                <div className="custom-control custom-checkbox">
                 <input
                  className="custom-control-input"
                  id="orderRegistWorkDayDetailSun"
                  type="checkbox"
                 />
                 <label
                  className="custom-control-label"
                  htmlFor="orderRegistWorkDayDetailSun"
                 >
                  일
                 </label>
                </div>
               </div>
              </div>
              <div className="form-group">
               <label htmlFor="exampleFormControlInput7">근무시간</label>
               <input
                className="form-control"
                id="exampleFormControlInput7"
                type="email"
                placeholder="02:00~10:00"
                key="exampleFormControlInput7"
               />
              </div>
              <div className="form-group">
               <label htmlFor="orderRegistDetailMatter">상세 사항</label>
               <textarea
                className="form-control"
                id="orderRegistDetailMatter"
                rows="3"
                placeholder="ex) 연락주세요. 02-xxx-xxxx "
               ></textarea>
              </div>
             </form>
            </div>
            <div className="sbp-preview-text">
             위 정보 입력한 그대로 차주 앱에서 표시 됩니다. 추가로 근무 조건을
             입력해 주세요.
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </main>
   </MainStructure>
  );
 }
}

export default OrderRegist;
