import React from "react";
import MainStructure from "components/structure/MainStructure";
import "./ApplicantManage.css";

import "./datatables.css";
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
  };
 }
 componentDidMount() {
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

 shouldComponentUpdate(nextProps, nextState) {
  console.log(this.state.names);
  console.log(nextState.names);
  if (nextState.names.length !== this.state.names.length) {
   this.reloadTableData(nextState.names);
  } else {
   this.updateTable(nextState.names);
  }
  return false;
 }

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
        <div className="datatable table-responsive">
         <div
          id="dataTable_wrapper"
          className="dataTables_wrapper dt-bootstrap4"
         >
          <div className="row">
           <div className="col-sm-12 col-md-6">
            <div className="dataTables_length" id="dataTable_length">
             <label>
              Show{" "}
              <select
               name="dataTable_length"
               aria-controls="dataTable"
               className="custom-select custom-select-sm form-control form-control-sm"
              >
               <option value="10">10</option>
               <option value="25">25</option>
               <option value="50">50</option>
               <option value="100">100</option>
              </select>{" "}
              entries
             </label>
            </div>
           </div>
           <div className="col-sm-12 col-md-6">
            <div id="dataTable_filter" className="dataTables_filter">
             <label>
              검색:
              <input
               type="search"
               className="form-control form-control-sm"
               placeholder=""
               aria-controls="dataTable"
              />
             </label>
            </div>
           </div>
          </div>
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
                style={{ width: "152px" }}
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
                style={{ width: "230px" }}
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
                style={{ width: "107px" }}
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
                style={{ width: "49px" }}
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
                style={{ width: "100px" }}
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
                style={{ width: "88px" }}
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
                style={{ width: "68px" }}
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
               <th
                className="sorting"
                tabIndex="0"
                aria-controls="dataTable"
                rowSpan="1"
                colSpan="1"
                aria-label="Actions: activate to sort column ascending"
                style={{ width: "80px" }}
               >
                Actions
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
               <th rowSpan="1" colSpan="1">
                Actions
               </th>
              </tr>
             </tfoot>
             <tbody>
              <tr role="row" className="odd">
               <td className="sorting_1">001</td>
               <td>김차0 30세</td>
               <td>1t 냉장</td>
               <td>1년 미만</td>
               <td>성실함으로 열심히 하겠습니다. 처음이지...</td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="even">
               <td className="sorting_1">002</td>
               <td>김차0 30세</td>
               <td>5t 냉장</td>
               <td>5년</td>
               <td>5년 경력의 냉장 차주</td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-primary badge-pill">열람</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="odd">
               <td className="sorting_1">003</td>
               <td>김차0 30세</td>
               <td>1t 냉장</td>
               <td>3년</td>
               <td>안전, 정확한 배송 책임집니다.</td>
               <td>20.06.09</td>
               <td>
                <div className="badge badge-secondary badge-pill">미열람</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="even">
               <td className="sorting_1">Bradley Greer</td>
               <td>Software Engineer</td>
               <td>London</td>
               <td>41</td>
               <td>2012/10/13</td>
               <td>$132,000</td>
               <td>
                <div className="badge badge-warning badge-pill">Pending</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="odd">
               <td className="sorting_1">Brenden Wagner</td>
               <td>Software Engineer</td>
               <td>San Francisco</td>
               <td>28</td>
               <td>2011/06/07</td>
               <td>$206,850</td>
               <td>
                <div className="badge badge-primary badge-pill">Full-time</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="even">
               <td className="sorting_1">Brielle Williamson</td>
               <td>Integration Specialist</td>
               <td>New York</td>
               <td>61</td>
               <td>2012/12/02</td>
               <td>$372,000</td>
               <td>
                <div className="badge badge-primary badge-pill">Full-time</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="odd">
               <td className="sorting_1">Bruno Nash</td>
               <td>Software Engineer</td>
               <td>London</td>
               <td>38</td>
               <td>2011/05/03</td>
               <td>$163,500</td>
               <td>
                <div className="badge badge-info badge-pill">Contract</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="even">
               <td className="sorting_1">Caesar Vance</td>
               <td>Pre-Sales Support</td>
               <td>New York</td>
               <td>21</td>
               <td>2011/12/12</td>
               <td>$106,450</td>
               <td>
                <div className="badge badge-secondary badge-pill">
                 Part-time
                </div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="odd">
               <td className="sorting_1">Cara Stevens</td>
               <td>Sales Assistant</td>
               <td>New York</td>
               <td>46</td>
               <td>2011/12/06</td>
               <td>$145,600</td>
               <td>
                <div className="badge badge-primary badge-pill">Full-time</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
               </td>
              </tr>
              <tr role="row" className="even">
               <td className="sorting_1">Cedric Kelly</td>
               <td>Senior Javascript Developer</td>
               <td>Edinburgh</td>
               <td>22</td>
               <td>2012/03/29</td>
               <td>$433,060</td>
               <td>
                <div className="badge badge-info badge-pill">Contract</div>
               </td>
               <td>
                <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
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
                  className="feather feather-more-vertical"
                 >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                 </svg>
                </button>
                <button className="btn btn-datatable btn-icon btn-transparent-dark">
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
                  className="feather feather-trash-2"
                 >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                 </svg>
                </button>
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
             Showing 1 to 10 of 57 entries
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
     </div>
    </main>
   </MainStructure>
  );
 }
}

export default ApplicantManage;
