import React from "react";
import MainStructure from "components/structure/MainStructure";
//import "./TruckOwnerList.css";

import "styles/datatables.css";
import $ from "jquery";
$.DataTable = require("datatables.net");
import "datatables.net-dt";
import { Component } from "react";

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

class TruckOwnerList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   names: [],
  };
 }
 componentDidMount() {
  attachJiraIssueColletor();
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
         <span>전체 차주 리스트</span>
        </h1>
        <div className="page-header-subtitle">
         전체 차주 리스트를 조회합니다.
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header row">
        <div className="col-6">전체 차주 리스트</div>
        <div class="col-sm-12 col-md-6 row">
         <div class="col-12 d-flex justify-content-end">
          <button class="btn btn-info">
           <span>관리</span>
          </button>
         </div>
        </div>
       </div>
       <div className="card-body">
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
                style={{ width: "15%" }}
               >
                운송그룹
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
                style={{ width: "15%" }}
               >
                담당자
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
                style={{ width: "15%" }}
               >
                차주명
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
                style={{ width: "15%" }}
               >
                근무 현황
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
                근무일
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
                style={{ width: "15%" }}
               >
                연락처
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
                운송그룹
               </th>
               <th rowSpan="1" colSpan="1">
                담당자
               </th>
               <th rowSpan="1" colSpan="1">
                차주명
               </th>
               <th rowSpan="1" colSpan="1">
                근무현황
               </th>
               <th rowSpan="1" colSpan="1">
                근무일
               </th>
               <th rowSpan="1" colSpan="1">
                연락처
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
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="odd"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
              </tr>
              <tr
               role="row"
               className="even"
               data-toggle="modal"
               data-target="#exampleModalCenter"
              >
               <td className="sorting_1">TS</td>
               <td>유아름</td>
               <td>김차일</td>
               <td>근무중</td>
               <td>주6(일x)</td>
               <td>010-1234-5678</td>
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
       id="exampleModalCenter1"
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
            <h5 className="card-title text-primary">김차일 010-1111-1411</h5>
            <div className="card-text row">
             <div className="col-6">
              <div>차량: 1t 냉장</div>
              <div>경력: 1년 미만</div>
             </div>
             <div className="col-6">
              <div>
               <h4>면허 및 자격</h4>
              </div>
              <div>1종 대형</div>
              <div>화물운송자격증 보유</div>
              <div>개인사업자</div>
             </div>
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

export default TruckOwnerList;
