import React from "react";
import { connect } from "react-redux";
import MainStructure from "components/structure/MainStructure";
import "./OrderRegist.css";
import $ from "jquery";
import { Component } from "react";
import axios from "axios";

class OrderRegist extends Component {
 constructor(props) {
  super(props);
  this.state = {
   jusos: null,
   loading: false,
   registOrderWorkingAreaEtcMatterToggle: false,
   orderRegistWorkTypeValue: "",
  };
  this._getDaumAddressFinder = (event) => {
   new daum.Postcode({
    oncomplete: function (data) {
     $("#registOrderWorkingArea").val(data.address);
     // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
     // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    },
   }).open();
  };
  this._setorderRegistWorkType = (event) => {
   console.log(event.target.value);
   switch (event.target.value) {
    case "needSelect":
     $("[id^=06]").prop("checked", false);
     $("[id^=06]").attr("disabled", true);
     break;
    case "fiveDay":
     $("[id^=06]").prop("checked", true);
     $("[id^=06]").attr("disabled", false);
     $("[id=0606]").prop("checked", false);
     $("[id=0607]").prop("checked", false);
     break;
    case "sixDay":
     $("[id^=06]").prop("checked", true);
     $("[id^=06]").attr("disabled", false);
     $("[id=0607]").prop("checked", false);
     break;
    case "directCheck":
     $("[id^=06]").prop("checked", false);
     $("[id^=06]").attr("disabled", false);
     break;
    default:
     break;
   }
  };
  this._setRegistOrderWorkingAreaEtcMatterToggle = (event) => {
   this.setState({
    registOrderWorkingAreaEtcMatterToggle: event.target.checked,
   });
  };
  /*
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
  */
  this._setTimes = (hour, minute) => {
   var mil = false; // use am/pm

   var hour = document.getElementById(hour);
   var min = document.getElementById(minute);

   for (var i = 0; i < 24; i++) {
    var val = i < 10 && mil ? "0" + i : i;
    if (!mil && val > 12) val -= 12;
    hour.options[i] = new Option(val, i);
   }
   for (var i = 0; i < 60; i++) {
    var val = i < 10 ? "0" + i : i;
    min.options[i] = new Option(val, i);
   }
   /*
   hour.onchange = function () {
    document.getElementById(hour).value =
     hour.options[hour.selectedIndex].text + ":" + min.value;
   };
   min.onchange = function () {
    hour.onchange();
   };
   var now = new Date();
   hour.selectedIndex = now.getHours();
   min.selectedIndex = now.getMinutes();
   hour.onchange();
   */
  };
 }
 /*
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
 */
 componentDidMount() {
  attachJiraIssueColletor();

  console.log(this.props);
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
  this._setTimes("orderRegisWorkHourStart", "orderRegisWorkMinuteStart");
  this._setTimes("orderRegisWorkHourEnd", "orderRegisWorkMinuteEnd");
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
          <div className="card-header">오더 등록</div>
          <div className="card-body">
           <div className="sbp-preview">
            <div className="sbp-preview-content">
             <form role="form" id="orderRegistForm">
              <div className="form-group row">
               <label
                htmlFor="orderRegisWorkGroup"
                className="col-12 col-sm-2 col-form-label"
               >
                운송그룹
               </label>
               <select
                className="form-control col-12 col-sm-4"
                id="orderRegisWorkGroup"
                name="workGroup"
               >
                 {this.props.orderRegisWorkGroupCodes
                  .map((obj, index) => {
                     return (
                      <option key={obj.code} value={obj.code}>
                       {obj.codeDc}
                      </option>
                     );
                  })}
               </select>
               <label
                htmlFor="orderRegisWorkGroupManager"
                className="col-12 col-sm-2 text-sm-right pr-5 col-form-label"
               >
                담당자
               </label>

               <input
                className="form-control col-12 col-sm-4"
                id="orderRegisWorkGroupManager"
                type="text"
                readOnly
                placeholder="서영락"
                key="orderRegisWorkGroupManager"
               />
              </div>
              <div className="form-group row">
               <label htmlFor="rcritType" className="col-12 col-sm-2 col-form-label">
                모집 유형
               </label>
               <div className="col-12 col-sm-4 pl-sm-0" id="rcritType">
                 {this.props.rcritTypeCodes
                  .map((obj, index) => {
                     return (
                      <label
                       className="col-form-label pr-3 radio-inline"
                       htmlFor={obj.code}
                       key={obj.code}
                      >
                       <input
                        className="radio mr-1"
                        type="radio"
                        name="rcritType"
                        key={obj.code}
                        id={obj.code}
                        value={obj.code}
                       />
                       {obj.codeDc}
                      </label>
                     );
                  })}
               </div>
               <label
                htmlFor="orderRegisWorkRcritMans"
                className="col-12 col-sm-2 text-sm-right pr-5 col-form-label"
               >
                모집인원
               </label>
               <input
                className="form-control col-12 col-sm-4"
                id="orderRegisWorkRcritMans"
                type="text"
                placeholder="5"
                key="orderRegisWorkRcritMans"
               />
              </div>

              <div className="form-group row">
               <label
                htmlFor="carType"
                className="col-12 col-sm-2 col-form-label"
               >
                운행차량
               </label>

               <div className="col-12 col-sm-10 row mx-0 px-0 d-flex justify-content-start">
                <div className="col-12 col-sm-6 ml-sm-0 pl-sm-0">
                 <div className="card">
                  <div className="card-header">차종(중복 선택 가능)</div>
                  <div className="card-body py-0">
                   <div className="col-12 row">
                    <div className="custom-control custom-radio" id="carType">
                 {this.props.carTypeCodes
                  .map((obj, index) => {
                     return (
                      <label
                       className="col-form-label pr-3 radio-inline"
                       htmlFor={obj.code}
                       key={obj.code}
                      >
                       <input
                        className="checkbox mr-1"
                        type="checkbox"
                        name="carType"
                        key={obj.code}
                        id={obj.code}
                        value={obj.code}
                       />
                       {obj.codeDc}
                      </label>
                     );
                  })}
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <div className="col-12 col-sm-6 mr-sm-0 pr-sm-0">
                 <div className="card">
                  <div className="card-header">톤수</div>
                  <div className="card-body py-0">
                   <div className="col-12 row">
                    <div className="custom-control custom-radio">
                 {this.props.tonTypeCodes
                  .map((obj, index) => {
                     return (
                      <label
                       className="col-form-label pr-3 radio-inline"
                       htmlFor={obj.code}
                       key={obj.code}
                      >
                       <input
                        className="radio mr-1"
                        type="radio"
                        name="tonType"
                        key={obj.code}
                        id={obj.code}
                        value={obj.code}
                       />
                       {obj.codeDc}
                      </label>
                     );
                  })}
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div className="form-group row">
               <label
                htmlFor="exampleFormControlInput3"
                className="col-12 col-sm-2 col-form-label"
               >
                배송 품목
               </label>
               <input
                className="form-control col-12 col-sm-10"
                id="exampleFormControlInput3"
                type="email"
                placeholder="ex) 박스 일 40건"
                key="exampleFormControlInput3"
               />
              </div>
              <div className="form-group row">
               <label
                htmlFor="orderRegistPayAmt"
                className="col-12 col-sm-2 col-form-label"
               >
                급여
               </label>
               <input
                className="form-control col-12 col-sm-4"
                id="orderRegistPayAmt"
                type="email"
                placeholder="ex) 500만원"
                key="orderRegistPayAmt"
               />
               <label
                htmlFor="payFullType"
                className="col-12 col-sm-2 text-sm-right pr-5 col-form-label"
               >
                완제/무제
               </label>
               <div className="col-12 col-sm-4 row">
                <div className="custom-control custom-radio" id="payFullType">
                 {this.props.payFullTypeCodes
                  .map((obj, index) => {
                     return (
                      <label
                       className="col-form-label pr-3 radio-inline"
                       htmlFor={obj.code}
                       key={obj.code}
                      >
                       <input
                        className="radio mr-1"
                        type="radio"
                        name="payFullType"
                        key={obj.code}
                        id={obj.code}
                        value={obj.code}
                       />
                       {obj.codeDc}
                      </label>
                     );
                  })}
                </div>
               </div>
              </div>
              <div className="form-group row">
               <label
                htmlFor="registOrderWorkingArea"
                className="col-12 col-sm-2 col-form-label"
               >
                지역
               </label>
               <div className="col-12 col-sm-10 row pr-sm-0">
                <div className="col-12 row">
                 {/*
                 <input
                  value={this.state.value}
                  onChange={this._onChangeHandler}
                  className="form-control col-8"
                  id="registOrderWorkingArea"
                  type="text"
                  placeholder="서이천물류센터"
                  key="registOrderWorkingArea"
                  autoComplete="off"
                 />
 */}
                 <input
                  value={this.state.value}
                  onClick={this._getDaumAddressFinder}
                  readOnly
                  className="form-control col-sm-8 col-12"
                  id="registOrderWorkingArea"
                  type="text"
                  placeholder="서이천물류센터"
                  key="registOrderWorkingArea"
                  autoComplete="off"
                 />
                 {/*this.renderJusos*/}

                 <div className="col-sm-3 col-12">
                  <label
                   className="col-form-label pr-3 radio-inline"
                   htmlFor="registOrderWorkingAreaEtcMatterToggle"
                  >
                   <input
                    className="checkbox mr-1"
                    id="registOrderWorkingAreaEtcMatterToggle"
                    type="checkbox"
                    onChange={this._setRegistOrderWorkingAreaEtcMatterToggle}
                    checked={this.state.registOrderWorkingAreaEtcMatterToggle}
                   />
                   기타입력사항
                  </label>
                 </div>
                </div>
               </div>
              </div>
              {this.state.registOrderWorkingAreaEtcMatterToggle ? (
               <div className="form-group row">
                <label
                 htmlFor="registOrderWorkingArea"
                 className="col-12 col-sm-2 col-form-label"
                ></label>

                <label
                 htmlFor="registOrderWorkingAreaEtcMatter"
                 className="col-12 col-sm-2 col-form-label text-sm-right"
                >
                 기타입력사항:
                </label>
                <input
                 className="form-control col-12 col-sm-8"
                 id="registOrderWorkingAreaEtcMatter"
                 type="text"
                 placeholder="ex) 기타입력사항"
                 key="registOrderWorkingAreaEtcMatter"
                />
               </div>
              ) : null}
              <div className="form-group row">
               <label
                htmlFor="exampleFormControlInput5"
                className="col-12 col-sm-2 col-form-label"
               >
                운행구간
               </label>
               <input
                className="form-control col-12 col-sm-10"
                id="exampleFormControlInput5"
                type="email"
                placeholder="ex) 서울시"
                key="exampleFormControlInput5"
               />
              </div>
              <div className="form-group row">
               <label
                htmlFor="orderRegistWorkType"
                className="col-12 col-sm-2 col-form-label"
               >
                근무요일
               </label>
               <select
                className="form-control col-12 col-sm-10"
                id="orderRegistWorkType"
                onChange={this._setorderRegistWorkType}
               >
                <option value="needSelect">선택</option>
                <option value="fiveDay">주5일</option>
                <option value="sixDay">주6일</option>
                <option value="directCheck">직접입력</option>
               </select>
              </div>
              <div className="form-group row">
               <label
                htmlFor="workDays"
                className="col-12 col-sm-2 col-form-label"
               >
                상세요일 선택
               </label>
               <div className="col-12 col-sm-10 row" id="workDays">
                
               {this.props.workDayCodes
                  .map((obj, index) => {
                     return (
                      <label
                       className="col-form-label pr-3 radio-inline"
                       htmlFor={obj.code}
                       key={obj.code}
                      >
                       <input
                        className="checkbox mr-1"
                        type="checkbox"
                        name="workDay"
                        key={obj.code}
                        id={obj.code}
                        value={obj.code}
                        disabled
                       />
                       {obj.codeDc}
                      </label>
                     );
                  })}
               </div>
              </div>
              <div className="form-group row">
               <label
                htmlFor="orderRegisWorkHourStart"
                className="col-12 col-sm-2 col-form-label"
               >
                근무시간
               </label>
               <div className="col-12 col-sm-10 row">
               <select
                className="form-control col-sm-1 col-4"
                id="orderRegisWorkHourStart"
               ></select>
               <label className="col-form-label ml-3 mr-3">:</label>
               <select
                className="form-control col-sm-1 col-4"
                id="orderRegisWorkMinuteStart"
               ></select>
               <label className="col-form-label ml-3 mr-3">~</label>
               <select
                className="form-control col-sm-1 col-4"
                id="orderRegisWorkHourEnd"
               ></select>
               <label className="col-form-label ml-3 mr-3">:</label>
               <select
                className="form-control col-sm-1 col-4"
                id="orderRegisWorkMinuteEnd"
               ></select>
               </div>
              </div>
              <div className="form-group row">
               <label
                htmlFor="orderRegistDetailMatter"
                className="col-12 col-sm-2 col-form-label"
               >
                상세 사항
               </label>
               <textarea
                className="form-control col-12 col-sm-10"
                id="orderRegistDetailMatter"
                rows="3"
                placeholder="ex) 연락주세요. 02-xxx-xxxx "
               ></textarea>
              </div>
              <div className="d-flex flex-row-reverse">
               <button className="btn btn-primary" type="button">
                등록 완료
               </button>
               <button className="btn btn-secondary mr-3" type="button">
                임시저장
               </button>
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

const mapStateToProps = (state) => ({
 codes: state.codes.codes,
 orderRegisWorkGroupCodes: state.codes.orderRegisWorkGroupCodes,
 rcritTypeCodes: state.codes.rcritTypeCodes,
 carTypeCodes: state.codes.carTypeCodes,
 tonTypeCodes: state.codes.tonTypeCodes,
 payFullTypeCodes: state.codes.payFullTypeCodes,
 workDayCodes: state.codes.workDayCodes
});

export default connect(mapStateToProps)(OrderRegist);
