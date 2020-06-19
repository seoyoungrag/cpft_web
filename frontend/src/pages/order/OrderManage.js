import React from "react";
import MainStructure from "components/structure/MainStructure";
import "./OrderManage.css";

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

class OrderManage extends Component {
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
         <span>오더 관리</span>
        </h1>
        <div className="page-header-subtitle">오더와 지원자를 관리합니다.</div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="row">
       <div className="col-lg-9">
        <div className="card">
         <div className="card-header card-header-tabs card-header-primary">
          <div className="nav-tabs-navigation">
           <div className="nav-tabs-wrapper">
            {/*<span className="nav-tabs-title">Tasks:</span>*/}
            <ul className="nav nav-tabs" data-tabs="tabs">
             <li className="nav-item">
              <a className="nav-link active" href="#profile" data-toggle="tab">
               <i className="fas fa-fw fa-hourglass-start"></i> 진행중
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#messages" data-toggle="tab">
               <i className="fa fa-fw fa-hourglass-half"></i> 접수마감
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">
               <i className="fa fa-fw fa-hourglass-end"></i> 채용종료
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">
               <i class="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i>
               임시저장
               <div className="ripple-container"></div>
              </a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">
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
           <div className="tab-pane active" id="profile">
            <table ref="main" names={this.state.names} />
            <Input
             onAddClick={(name, nickname) => {
              this.onAddClick(name, nickname);
             }}
            />
           </div>
           <div className="tab-pane" id="messages">
            <table className="table">
             <tbody>
              <tr>
               <td>
                <div className="form-check">
                 <label className="form-check-label">
                  <input
                   className="form-check-input"
                   type="checkbox"
                   value=""
                   checked=""
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
           </div>
           <div className="tab-pane" id="settings">
            <table className="table">
             <tbody>
              <tr>
               <td>
                <div className="form-check">
                 <label className="form-check-label">
                  <input
                   className="form-check-input"
                   type="checkbox"
                   value=""
                  />
                  <span className="form-check-sign">
                   <span className="check"></span>
                  </span>
                 </label>
                </div>
               </td>
               <td>
                Lines From Great Russian Literature? Or E-mails From My Boss?
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
                   checked=""
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
                   checked=""
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
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="col-lg-3">
        <div className="nav-sticky">
         <div className="card">
          <div className="card-body">
           <ul className="nav flex-column" id="stickyNav">
            <li className="nav-item">
             <a className="nav-link" href="#default">
              Default Form Controls
             </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#solid">
              Solid Form Controls
             </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#checkbox">
              Default Checkboxes &amp; Radio
             </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#checkboxSolid">
              Solid Checkboxes &amp; Radio
             </a>
            </li>
           </ul>
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

export default OrderManage;
