import React from "react";
import MainStructure from "components/structure/MainStructure";
import "./ApplicantManage.css";

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

class ApplicantManage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   names: [],
   orderSelecteButtonValue: "",
  };
 }

 componentDidMount() {
  const reactClass = this;
  $("#orderSelectMenu a").on("click", function () {
   $("#orderSelecteButton").html($(this).html());
   reactClass.setState({ orderSelecteButtonValue: $(this).data("orderid") });
  });
  $(this.refs.main).DataTable({
   dom: '<"data-table-wrapper"t>',
   data: this.props.names,
   columns,
   ordering: false,
  });
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
         <span>지원자 관리</span>
        </h1>
        <div className="page-header-subtitle">지원자를 관리합니다.</div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header">지원자 관리</div>
       <div className="card-body">
        <div className="row">
         <div className="col-sm-12 col-md-6">
          <div className="col-12 row h-100">
           <div className="btn-group dropdown col-12 h-100 text-wrap w-auto">
            <button
             className="btn btn-secondary btn-sm dropdown-toggle text-wrap mh-100"
             type="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
             id="orderSelecteButton"
            >
             전체
            </button>
            <div
             className="dropdown-menu w-100"
             aria-labelledby="orderSelecteButton"
             id="orderSelectMenu"
            >
             <a
              className="dropdown-item w-100 text-truncate"
              href="#"
              data-orderid="001"
             >
              001 팀프레시 하남 고정 개인사업자 차주 모집001 팀프레시 하남 고정
              개인사업자 차주 모집001 팀프레시 하남 고정 개인사업자 차주 모집001
              팀프레시 하남 고정 개인사업자 차주 모집001 팀프레시 하남 고정
              개인사업자 차주 모집001 팀프레시 하남 고정 개인사업자 차주 모집001
              팀프레시 하남 고정 개인사업자 차주 모집001 팀프레시 하남 고정
              개인사업자 차주 모집001 팀프레시 하남 고정 개인사업자 차주 모집001
              팀프레시 하남 고정 개인사업자 차주 모집001 팀프레시 하남 고정
              개인사업자 차주 모집001 팀프레시 하남 고정 개인사업자 차주 모집001
              팀프레시 하남 고정 개인사업자 차주 모집001 팀프레시 하남 고정
              개인사업자 차주 모집
             </a>
             <a className="dropdown-item" href="#" data-orderid="002">
              002 팀프레시 하남 고정 개인사업자 차주 모집
             </a>

             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#" data-orderid="">
              전체
             </a>
            </div>
           </div>
          </div>
         </div>

         {this.state.orderSelecteButtonValue != "" ? (
          <div className="col-sm-12 col-md-6 row">
           <div className="col-4 d-inline-flex">
            <button className="btn btn-info">
             <span>공고 수정</span>
            </button>
           </div>
           <div className="col-8 m-0 p-0 apyStatusBoard">
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
         ) : null}
        </div>
        <div className="datatable table-responsive">
         <div
          id="dataTable_wrapper"
          className="dataTables_wrapper dt-bootstrap4"
         >
          <div className="row">
           <div className="col-sm-12">
            <table
             className="table table-bordered table-hover dataTable"
             id="dataTable"
             width="100%"
             cellSpacing="0"
             role="grid"
             aria-describedby="dataTable_info"
             style={{ width: "100%" }}
            >
             <thead>
              <tr role="row">
               <th
                className="sorting_asc"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
                style={{ width: "60px" }}
               >
                오더 번호
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort-up"
                 className="svg-inline--fa fa-sort-up fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Position: activate to sort column ascending"
                style={{ width: "60px" }}
               >
                이름/나이
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Office: activate to sort column ascending"
                style={{ width: "70px" }}
               >
                차량 톤수
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Age: activate to sort column ascending"
                style={{ width: "50px" }}
               >
                경력
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Start date: activate to sort column ascending"
               >
                메세지
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Salary: activate to sort column ascending"
                style={{ width: "75px" }}
               >
                지원일
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Status: activate to sort column ascending"
                style={{ width: "50px" }}
               >
                열람
                <svg
                 data-fa-pseudo-element=":after"
                 data-prefix="fas"
                 data-icon="sort"
                 className="svg-inline--fa fa-sort fa-w-10"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512"
                 data-fa-i2svg=""
                >
                 <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                 ></path>
                </svg>
               </th>
              </tr>
             </thead>
             <tfoot>
              <tr>
               <th rowSpan="1" colSpan="1">
                오더 번호
               </th>
               <th rowSpan="1" colSpan="1">
                이름/나이
               </th>
               <th rowSpan="1" colSpan="1">
                차량 톤수
               </th>
               <th rowSpan="1" colSpan="1">
                경력
               </th>
               <th rowSpan="1" colSpan="1">
                메세지
               </th>
               <th rowSpan="1" colSpan="1">
                지원일
               </th>
               <th rowSpan="1" colSpan="1">
                열람
               </th>
              </tr>
             </tfoot>
             <tbody>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>1t 냉장</td>
               <td>1년 미만</td>
               <td className="text-truncate mw-0">
                성실함으로 열심히 하겠습니다. 처음이지...성실함으로 열심히
                하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...성실함으로 열심히 하겠습니다.
                처음이지...성실함으로 열심히 하겠습니다. 처음이지...성실함으로
                열심히 하겠습니다. 처음이지...
               </td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>5년</td>
               <td>5년 경력의 냉장 차주</td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>1t 냉장</td>
               <td>3년</td>
               <td>안전, 정확한 배송 책임집니다.</td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-secondary badge-pill">미열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>2년</td>
               <td>안녕하세요.</td>
               <td>20.06.11</td>
               <td>
                <div className="badge badge-warning badge-pill">취소됨</div>
               </td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>1년</td>
               <td>안녕하세요2.</td>
               <td>20.06.12</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>6년</td>
               <td>안녕하세요3</td>
               <td>20.06.14</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>3t 냉장</td>
               <td>1년</td>
               <td>안녕하세요4</td>
               <td>20.06.16</td>
               <td>
                <div className="badge badge-info badge-pill">채용확정</div>
               </td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>1t 냉장</td>
               <td>3년</td>
               <td>안녕하세요6</td>
               <td>20.06.16</td>
               <td>
                <div className="badge badge-secondary badge-pill">미열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>7년</td>
               <td>안녕하세요7</td>
               <td>20.06.17</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>1년 미만</td>
               <td>안녕하세요5</td>
               <td>20.06.17</td>
               <td>
                <div className="badge badge-info badge-pill">채용확정</div>
               </td>
              </tr>
             </tbody>
            </table>
           </div>
          </div>
          <div className="row">
           <div className="col-sm-12 col-md-5">
            <div
             className="dataTables_info"
             id="dataTable_info"
             role="status"
             aria-live="polite"
            >
             1 ~ 10 총 57
            </div>
           </div>
           <div className="col-sm-12 col-md-7">
            <div
             className="dataTables_paginate paging_simple_numbers"
             id="dataTable_paginate"
            >
             <ul className="pagination">
              <li
               className="paginate_button page-item previous disabled"
               id="dataTable_previous"
              >
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="0"
                tabIndex="0"
                className="page-link"
               >
                Previous
               </a>
              </li>
              <li className="paginate_button page-item active">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="1"
                tabIndex="0"
                className="page-link"
               >
                1
               </a>
              </li>
              <li className="paginate_button page-item ">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="2"
                tabIndex="0"
                className="page-link"
               >
                2
               </a>
              </li>
              <li className="paginate_button page-item ">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="3"
                tabIndex="0"
                className="page-link"
               >
                3
               </a>
              </li>
              <li className="paginate_button page-item ">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="4"
                tabIndex="0"
                className="page-link"
               >
                4
               </a>
              </li>
              <li className="paginate_button page-item ">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="5"
                tabIndex="0"
                className="page-link"
               >
                5
               </a>
              </li>
              <li className="paginate_button page-item ">
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="6"
                tabIndex="0"
                className="page-link"
               >
                6
               </a>
              </li>
              <li
               className="paginate_button page-item next"
               id="dataTable_next"
              >
               <a
                href="#"
                aria-controls="dataTable"
                data-dt-idx="7"
                tabIndex="0"
                className="page-link"
               >
                Next
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div
       className="modal fade"
       id="exampleModalCenter"
       tabIndex="-1"
       role="dialog"
       aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true"
      >
       <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
         <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
           오더번호 001
          </h5>
          <button
           className="close"
           type="button"
           data-dismiss="modal"
           aria-label="Close"
          >
           <span aria-hidden="true">×</span>
          </button>
         </div>
         <div className="modal-body">
          <div className="card mb-4">
           <div className="card-body">
            <h5 className="card-title text-primary row m-auto p-auto">
             <dt>김차일</dt>&nbsp; <dd>010-1111-1411</dd>
            </h5>
            <div className="card-text row">
             <dl className="col-6 row mb-auto">
              <dt className="col-3 h-25 d-flex justify-content-end">차량:</dt>{" "}
              <dd className="col-9 h-25 ">1t 냉장</dd>
              <dt className="col-3 h-25 d-flex justify-content-end">
               경력:
              </dt>{" "}
              <dd className="col-9 h-25 ">1년 미만</dd>
             </dl>
             <dl className="col-6">
              <dt className="mb-3">면허 및 자격</dt>
              <dd>1종 대형</dd>
              <dd>화물운송자격증 보유</dd>
              <dd>개인사업자</dd>
             </dl>
             <dl className="col-12 m-auto">
              <dt className="mb-3">메시지</dt>
              <dd>성실함으로 열심히 하겠습니다. 처음이지만 적극적으로!</dd>
             </dl>
            </div>
           </div>
           <a
            className="card-footer d-flex align-items-center justify-content-between"
            href="#"
           >
            차주 상세 보기
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
             className="feather feather-arrow-right"
            >
             <line x1="5" y1="12" x2="19" y2="12"></line>
             <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
           </a>
          </div>
         </div>
         <div className="modal-footer">
          <button
           className="btn btn-secondary"
           type="button"
           data-dismiss="modal"
          >
           닫기
          </button>
          <button className="btn btn-primary" type="button">
           채용확정
          </button>
          <button className="btn btn-danger" type="button">
           채용거절
          </button>
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

export default ApplicantManage;
