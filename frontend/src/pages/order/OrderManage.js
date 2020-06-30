import React from "react";
import { connect } from "react-redux";
import MainStructure from "components/structure/MainStructure";
import "./OrderManage.css";
import axios from "axios";
import "styles/datatables.css";
import $ from "jquery";
$.DataTable = require("datatables.net");
import "datatables.net-dt";
import { Component } from "react";
import Input from "./Input";

const columns = [
 {
  title: "Name",
  width: 120,
  data: "name",
 },
 {
  title: "Nickname",
  width: 180,
  data: "nickname",
 },
];

class OrderManage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   names: [],
   orderList701: [],
   orderList702: [],
   orderList703: [],
   orderList: [],
   workGroups: [],
  };
 }
 async componentDidMount() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let { data }  = await axios.get("/v1/order/carrier/"+userInfo.carrierSeq, {
   headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": userInfo.token,
   },
  });
  if (data.list.length>0) {
    let orderList701 = data.list.filter((n) => {
     return n.status == '0701';
    });
    let orderList702 = data.list.filter((n) => {
      return n.status == '0702';
     });
    let orderList703 = data.list.filter((n) => {
      return n.status == '0703';
     });
    let orderList = data.list;
   this.setState({ orderList701, orderList702, orderList703, orderList });
  }
  
  let data2 = await axios.get("/v1/carrier", {
    headers: {
     "Content-Type": "application/json",
     "X-AUTH-TOKEN": userInfo.token,
    },
   });
   
   if (data2.data.data.workGroups) {
    this.setState({ workGroups: data2.data.data.workGroups });
   }

  attachJiraIssueColletor();
  /*
  $(this.refs.main).DataTable({
   dom: '<"data-table-wrapper"t>',
   data: this.props.names,
   columns,
   ordering: false,
  });*/
  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
   target: "#stickyNav",
   offset: 0,
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
 componentWillUnmount() {
  $(".data-table-wrapper").find("table").DataTable().destroy(true);
 }
 reloadTableData = (names) => {
  const table = $(".data-table-wrapper").find("table").DataTable();
  table.clear();
  table.rows.add(names);
  table.draw();
 };

 updateTable = (names) => {
  const table = $(".data-table-wrapper").find("table").DataTable();
  let dataChanged = false;
  table.rows().every(function () {
   const oldNameData = this.data();
   const newNameData = names.find((nameData) => {
    return nameData.name === oldNameData.name;
   });
   if (oldNameData.nickname !== newNameData.nickname) {
    dataChanged = true;
    this.data(newNameData);
   }
   return true; // RCA esLint configuration wants us to
   // return something
  });

  if (dataChanged) {
   table.draw();
  }
 };
/*
 shouldComponentUpdate(nextProps, nextState) {
   
  if (nextState.names.length !== this.state.names.length) {
   this.reloadTableData(nextState.names);
  } else {
   this.updateTable(nextState.names);
  }
  if (nextState.orderList701.length !== this.state.orderList701.length) {
   return true;
  }
  if (nextState.orderList702.length !== this.state.orderList702.length) {
   return true;
  }
  if (nextState.orderList703.length !== this.state.orderList703.length) {
   return true;
  }
  if (nextState.orderList.length !== this.state.orderList.length) {
   return true;
  }
  if (nextState.workGroups.length !== this.state.workGroups.length) {
   return true;
  }
  return false;
  
 }
*/
 onAddClick(name, nickname) {
  let updated = false;
  const result = this.state.names.map((nameData) => {
   if (nameData.name === name) {
    updated = true;
    return { name, nickname };
   }
   return nameData;
  });
  if (!updated) {
   result.push({ name, nickname });
  }

  this.setState({
   names: result,
  });
 }

 render() {
  const { workGroups, orderList701, orderList702, orderList703, orderList } = this.state;
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
         <span>오더 관리</span>
        </h1>
        <div className="page-header-subtitle">오더와 지원자를 관리합니다.</div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="row">
       <div className="col-lg-12">
        <div className="card">
         <div className="card-header card-header-tabs card-header-primary pb-0">
          <div className="nav-tabs-navigation">
           <div className="nav-tabs-wrapper">
            {/*<span className="nav-tabs-title">Tasks:</span>*/}
            <ul className="nav nav-tabs" data-tabs="tabs">
             <li className="nav-item">
              <a
               className="nav-link d-flex align-items-center active"
               href="#ing"
               data-toggle="tab"
              >
               <i className="fas fa-fw fa-hourglass-start"></i> 진행중
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a
               className="nav-link d-flex align-items-center"
               href="#complete"
               data-toggle="tab"
              >
               <i className="fa fa-fw fa-hourglass-half"></i> 채용종료
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a
               className="nav-link d-flex align-items-center"
               href="#temp"
               data-toggle="tab"
              >
               <i className="fa fa-fw fa-hourglass-end"></i> 임시저장
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a
               className="nav-link d-flex align-items-center"
               href="#all"
               data-toggle="tab"
              >
               <i className="fa fa-fw fa-hourglass"></i> 전체
               <div className="ripple-container"></div>
              </a>
             </li>
            </ul>
           </div>
          </div>
         </div>
         <div className="card-body">
          <div className="tab-content">
           <div className="tab-pane active" id="ing">
            <div className="form-group col-6 row">
             <label
              htmlFor="orderRegisWorkGroup"
              className="col-2 col-form-label"
             >
              운송그룹
             </label>
             <select className="form-control col-4" id="orderRegisWorkGroup">
              
             {workGroups.length > 0
                 ? workGroups.map((obj, index) => {
                    return (
                     <option
                      key={obj.workGroupPk.workGroupNm}
                      value={obj.workGroupPk.workGroupNm}
                      data-manager={obj.workGroupManager}
                     >
                      {obj.workGroupPk.workGroupNm}
                     </option>
                    );
                   })
                 : null}
             </select>
            </div>
            <table className="table">
             <tbody>
             {orderList701.length>0?orderList701.map((obj, index) => {
               return (
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-primary align-top mr-1">
                     {obj.status=='0701' ? '진행중' : (obj.status=='0702' ? '종료': '임시저장')}
                    </span>
                    <span className="date">
                     <span className="date">
                     W{obj.workGroupNm}C{obj.carrierSeq}U{obj.userSeq}O{obj.orderSeq} <span className="tahoma">{obj.workGroupNm} {obj.workGroupManager}</span>
                     </span>
                     <span className="name">작성자: {obj.userNm}</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">{this.props.rcritTypeCodes.filter((e) => {return e.code==obj.rcritType}).map((r)=>{return r.codeValue})}</em> {obj.carrierNm} {this.props.tonTypeCodes.filter((e) => {return e.code==obj.tonType}).map((r)=>{return r.codeValue})} {this.props.carTypeCodes.filter((e) => {return e.code==obj.carType}).map((r)=>{return r.codeValue})} {obj.workingDaysType=='fiveDay' ? "주5일" : (obj.workingDaysType=='sixDay'?  "주6일": null)}
                     &nbsp;{obj.payAmt} {obj.detailMatter}
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                       {obj.workingArea} {"->"} {obj.opratSctn}
                      <span className="mday">
                       <span className="tahoma">{obj.createdAt}</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   
                   {obj.status=='0701' ? (<ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>) : (obj.status=='0702' ? (
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>): null)}
                  </div>
                 </div>
                </div>
               </td>
              </tr>)
             }): null}
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-primary align-top mr-1">
                     진행중
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-primary align-top mr-1">
                     진행중
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </tbody>
            </table>
           </div>
           <div className="tab-pane" id="complete">
            <div className="form-group col-6 row">
             <label
              htmlFor="orderRegisWorkGroup"
              className="col-2 col-form-label"
             >
              운송그룹
             </label>
             <select className="form-control col-4" id="orderRegisWorkGroup">
              
             {workGroups.length > 0
                 ? workGroups.map((obj, index) => {
                    return (
                     <option
                      key={obj.workGroupPk.workGroupNm}
                      value={obj.workGroupPk.workGroupNm}
                      data-manager={obj.workGroupManager}
                     >
                      {obj.workGroupPk.workGroupNm}
                     </option>
                    );
                   })
                 : null}
             </select>
            </div>
            <table className="table">
             <tbody>{orderList702.length>0?orderList702.map((obj, index) => {
               return (
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-success align-top mr-1">
                     {obj.status=='0701' ? '진행중' : (obj.status=='0702' ? '종료': '임시저장')}
                    </span>
                    <span className="date">
                     <span className="date">
                     W{obj.workGroupNm}C{obj.carrierSeq}U{obj.userSeq}O{obj.orderSeq} <span className="tahoma">{obj.workGroupNm} {obj.workGroupManager}</span>
                     </span>
                     <span className="name">작성자: {obj.userNm}</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">{this.props.rcritTypeCodes.filter((e) => {return e.code==obj.rcritType}).map((r)=>{return r.codeValue})}</em> {obj.carrierNm} {this.props.tonTypeCodes.filter((e) => {return e.code==obj.tonType}).map((r)=>{return r.codeValue})} {this.props.carTypeCodes.filter((e) => {return e.code==obj.carType}).map((r)=>{return r.codeValue})} {obj.workingDaysType=='fiveDay' ? "주5일" : (obj.workingDaysType=='sixDay'?  "주6일": null)}
                     &nbsp;{obj.payAmt} {obj.detailMatter}
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                       {obj.workingArea} {"->"} {obj.opratSctn}
                      <span className="mday">
                       <span className="tahoma">{obj.createdAt}</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="col-12 mt-3 p-0">
                    
                  {obj.status=='0701' ? (<ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>) : (obj.status=='0702' ? (
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>): null)}
                  </div>
                 </div>
                </div>
               </td>
              </tr>)
             }): null}
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-success align-top mr-1">
                     종료
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-success align-top mr-1">
                     종료
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </tbody>
            </table>
           </div>
           <div className="tab-pane" id="temp">
            <div className="form-group col-6 row">
             <label
              htmlFor="orderRegisWorkGroup"
              className="col-2 col-form-label"
             >
              운송그룹
             </label>
             <select className="form-control col-4" id="orderRegisWorkGroup">
              
             {workGroups.length > 0
                 ? workGroups.map((obj, index) => {
                    return (
                     <option
                      key={obj.workGroupPk.workGroupNm}
                      value={obj.workGroupPk.workGroupNm}
                      data-manager={obj.workGroupManager}
                     >
                      {obj.workGroupPk.workGroupNm}
                     </option>
                    );
                   })
                 : null}
             </select>
            </div>
            <table className="table">
             <tbody>
               {orderList703.length>0?orderList703.map((obj, index) => {
               return (
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">{obj.status=='0701' ? (
                    <span className="badge badge-primary align-top mr-1">
                     진행중
                    </span>) : (obj.status=='0702' ? (<span className="badge badge-success align-top mr-1">
                     종료
                    </span>): (
                    <span className="badge badge-info align-top mr-1">
                     임시저장
                    </span>))}
                    <span className="date">
                     <span className="date">
                     W{obj.workGroupNm}C{obj.carrierSeq}U{obj.userSeq}O{obj.orderSeq} <span className="tahoma">{obj.workGroupNm} {obj.workGroupManager}</span>
                     </span>
                     <span className="name">작성자: {obj.userNm}</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">{this.props.rcritTypeCodes.filter((e) => {return e.code==obj.rcritType}).map((r)=>{return r.codeValue})}</em> {obj.carrierNm} {this.props.tonTypeCodes.filter((e) => {return e.code==obj.tonType}).map((r)=>{return r.codeValue})} {this.props.carTypeCodes.filter((e) => {return e.code==obj.carType}).map((r)=>{return r.codeValue})} {obj.workingDaysType=='fiveDay' ? "주5일" : (obj.workingDaysType=='sixDay'?  "주6일": null)}
                     &nbsp;{obj.payAmt} {obj.detailMatter}
                    </h4>
                    
                     
                    
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                       {obj.workingArea} {"->"} {obj.opratSctn}
                      <span className="mday">
                       <span className="tahoma">{obj.createdAt}</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 {obj.status=='0701' ? (
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>) : (obj.status=='0702' ? 
                 (<div className="col-5 apyStatusBoard ">
                   <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                  </div>): (
                    <div className="col-5 apyStatusBoard ">
                    <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary mx-1">
                     <span>수정</span>
                    </button>
                    <button type="button" className="btn btn-danger  ml-1 mr-0">
                     <span>삭제</span>
                    </button>
                   </div>
                   </div>))}
                </div>
               </td>
              </tr>)
             }): null}
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-info align-top mr-1">
                     임시저장
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </tbody>
            </table>
            <table className="table d-none">
             <tbody>
              <tr>
               <td>
                <div className="form-check">
                 <label className="form-check-label">
                  <input
                   className="form-check-input"
                   type="checkbox"
                   value=""
                   checked
                  />
                  <span className="form-check-sign">
                   <span className="check"></span>
                  </span>
                 </label>
                </div>
               </td>
               <td>
                Flooded: One year later, assessing what was lost and what was
                found when a ravaging rain swept through metro Detroit
               </td>
               <td className="td-actions text-right">
                <button
                 type="button"
                 rel="tooltip"
                 title=""
                 className="btn btn-primary btn-link btn-sm"
                 data-original-title="Edit Task"
                >
                 <i className="material-icons">edit</i>
                </button>
                <button
                 type="button"
                 rel="tooltip"
                 title=""
                 className="btn btn-danger btn-link btn-sm"
                 data-original-title="Remove"
                >
                 <i className="material-icons">close</i>
                </button>
               </td>
              </tr>
              <tr>
               <td>
                <div className="form-check">
                 <label className="form-check-label">
                  <input
                   className="form-check-input"
                   type="checkbox"
                   value=""
                   checked
                  />
                  <span className="form-check-sign">
                   <span className="check"></span>
                  </span>
                 </label>
                </div>
               </td>
               <td>
                Sign contract for "What are conference organizers afraid of?"
               </td>
               <td className="td-actions text-right">
                <button
                 type="button"
                 rel="tooltip"
                 title=""
                 className="btn btn-primary btn-link btn-sm"
                 data-original-title="Edit Task"
                >
                 <i className="material-icons">edit</i>
                </button>
                <button
                 type="button"
                 rel="tooltip"
                 title=""
                 className="btn btn-danger btn-link btn-sm"
                 data-original-title="Remove"
                >
                 <i className="material-icons">close</i>
                </button>
               </td>
              </tr>
             </tbody>
            </table>

            {/*
            <table ref="main" className="d-none" names={this.state.names} />
            <Input
             className="d-none"
             onAddClick={(name, nickname) => {
              this.onAddClick(name, nickname);
             }}
            />
             */}
           </div>

           <div className="tab-pane" id="all">
            <div className="form-group col-6 row">
             <label
              htmlFor="orderRegisWorkGroup"
              className="col-2 col-form-label"
             >
              운송그룹
             </label>
             <select className="form-control col-4" id="orderRegisWorkGroup">
              
             {workGroups.length > 0
                 ? workGroups.map((obj, index) => {
                    return (
                     <option
                      key={obj.workGroupPk.workGroupNm}
                      value={obj.workGroupPk.workGroupNm}
                      data-manager={obj.workGroupManager}
                     >
                      {obj.workGroupPk.workGroupNm}
                     </option>
                    );
                   })
                 : null}
             </select>
            </div>
            <table className="table">
             <tbody>
               {orderList.length>0?orderList.map((obj, index) => {
               return (
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                     {obj.status=='0701' ? (
                    <span className="badge badge-primary align-top mr-1">
                     진행중
                    </span>) : (obj.status=='0702' ? (<span className="badge badge-success align-top mr-1">
                     종료
                    </span>): (
                    <span className="badge badge-info align-top mr-1">
                     임시저장
                    </span>))}
                    <span className="date">
                     <span className="date">
                     W{obj.workGroupNm}C{obj.carrierSeq}U{obj.userSeq}O{obj.orderSeq} <span className="tahoma">{obj.workGroupNm} {obj.workGroupManager}</span>
                     </span>
                     <span className="name">작성자: {obj.userNm}</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">{this.props.rcritTypeCodes.filter((e) => {return e.code==obj.rcritType}).map((r)=>{return r.codeValue})}</em> {obj.carrierNm} {this.props.tonTypeCodes.filter((e) => {return e.code==obj.tonType}).map((r)=>{return r.codeValue})} {this.props.carTypeCodes.filter((e) => {return e.code==obj.carType}).map((r)=>{return r.codeValue})} {obj.workingDaysType=='fiveDay' ? "주5일" : (obj.workingDaysType=='sixDay'?  "주6일": null)}
                     &nbsp;{obj.payAmt} {obj.detailMatter}
                    </h4>
                    
                    
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                       {obj.workingArea} {"->"} {obj.opratSctn}
                      <span className="mday">
                       <span className="tahoma">{obj.createdAt}</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 {obj.status=='0701' ? (
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>) : (obj.status=='0702' ? 
                 (<div className="col-5 apyStatusBoard ">
                   <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                  </div>): (
                    <div className="col-5 apyStatusBoard ">
                    <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary mx-1">
                     <span>수정</span>
                    </button>
                    <button type="button" className="btn btn-danger  ml-1 mr-0">
                     <span>삭제</span>
                    </button>
                   </div>
                   </div>))}
                </div>
               </td>
              </tr>)
             }): null}
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-primary align-top mr-1">
                     진행중
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-success mx-1">
                    <span>마감</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>

                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-info align-top mr-1">
                     임시저장
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="d-flex justify-content-end">
                   <button type="button" className="btn btn-primary mx-1">
                    <span>수정</span>
                   </button>
                   <button type="button" className="btn btn-danger  ml-1 mr-0">
                    <span>삭제</span>
                   </button>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td>
                <div className="inner row">
                 <div className="col-7">
                  <div className="jobTitWrap">
                   <span className="infoBx">
                    <span className="badge badge-success align-top mr-1">
                     완료
                    </span>
                    <span className="date">
                     <span className="date">
                      T001 <span className="tahoma">TS</span>
                     </span>
                     <span className="name">유아름</span>
                    </span>
                   </span>

                   <a href="#" className="tit devLinkExpire col-12 row">
                    <h4 className="h4 d-inline-block">
                     <em className="used">고정</em> 이디야 1t 냉탑 주6일
                     월300무제(각 팀 임의 제목)
                    </h4>
                   </a>
                  </div>

                  <div className="apyStatusBoard">
                   <div className="tbCol tbDate">
                    <span className="date">
                     <span className="tahoma">
                      2020.06.09 ~ 2020.09.07{" "}
                      <span className="mday">
                       <span className="tahoma">06.09</span> 등록
                      </span>
                     </span>
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="col-5 apyStatusBoard ">
                  <div className="col-12 mt-3 p-0">
                   <ul className="boardItem">
                    <li className="w-25">
                     <strong className="stepTit">지원자</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="apyStatusNotRead w-25">
                     <strong className="stepTit">열람</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                    <li className="on w-25">
                     <strong className="stepTit">연락중</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      1
                     </a>
                    </li>
                    <li className="w-25">
                     <strong className="stepTit">최종합격</strong>
                     <a
                      href="#"
                      className="itemNum tahoma devLinkExpire"
                      data-pts="-77"
                     >
                      0
                     </a>
                    </li>
                   </ul>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </tbody>
            </table>
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
  workDayCodes: state.codes.workDayCodes,
  token: state.auth.userInfo.token,
  carrierSeq: state.auth.userInfo.carrierSeq,
  userSeq: state.auth.userInfo.userSeq
 });
 
 export default connect(mapStateToProps)(OrderManage);

