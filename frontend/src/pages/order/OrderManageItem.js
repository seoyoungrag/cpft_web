import React, { Component } from "react";

class OrderManageItem extends Component {
 constructor() {
  super();
 }

 render() {
  const { obj } = this.props;
  return (
   <tr style={{ display: this.props.display }}>
    <td>
     <div className="inner row">
      <div className="col-7">
       <div className="jobTitWrap">
        <span className="infoBx">
         {obj.status == "0701" ? (
          <span className="badge badge-primary align-top mr-1">진행중</span>
         ) : obj.status == "0702" ? (
          <span className="badge badge-success align-top mr-1">종료</span>
         ) : (
          <span className="badge badge-info align-top mr-1">임시저장</span>
         )}
         <span className="date">
          <span className="date">
           W{obj.workGroupNm}C{obj.carrierSeq}U{obj.userSeq}O{obj.orderSeq}{" "}
           <span className="tahoma">
            {obj.workGroupNm} {obj.workGroupManager}
           </span>
          </span>
          <span className="name">작성자: {obj.userNm}</span>
         </span>
        </span>

        <a href="#" className="tit devLinkExpire col-12 row">
         <h4 className="h4 d-inline-block">
          <em className="used">
           {this.props.rcritTypeCodes
            .filter((e) => {
             return e.code == obj.rcritType;
            })
            .map((r) => {
             return r.codeValue;
            })}
          </em>{" "}
          {obj.carrierNm}{" "}
          {this.props.tonTypeCodes
           .filter((e) => {
            return e.code == obj.tonType;
           })
           .map((r) => {
            return r.codeValue;
           })}{" "}
          {this.props.carTypeCodes
           .filter((e) => {
            return e.code == obj.carType;
           })
           .map((r) => {
            return r.codeValue;
           })}{" "}
          {obj.workingDaysType == "fiveDay"
           ? "주5일"
           : obj.workingDaysType == "sixDay"
           ? "주6일"
           : null}
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
      {obj.status == "0701" ? (
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
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            1
           </a>
          </li>
          <li className="apyStatusNotRead w-25">
           <strong className="stepTit">열람</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            0
           </a>
          </li>
          <li className="on w-25">
           <strong className="stepTit">연락중</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            1
           </a>
          </li>
          <li className="w-25">
           <strong className="stepTit">최종합격</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            0
           </a>
          </li>
         </ul>
        </div>
       </div>
      ) : obj.status == "0702" ? (
       <div className="col-5 apyStatusBoard ">
        <div className="col-12 mt-3 p-0">
         <ul className="boardItem">
          <li className="w-25">
           <strong className="stepTit">지원자</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            1
           </a>
          </li>
          <li className="apyStatusNotRead w-25">
           <strong className="stepTit">열람</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            0
           </a>
          </li>
          <li className="on w-25">
           <strong className="stepTit">연락중</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            1
           </a>
          </li>
          <li className="w-25">
           <strong className="stepTit">최종합격</strong>
           <a href="#" className="itemNum tahoma devLinkExpire" data-pts="-77">
            0
           </a>
          </li>
         </ul>
        </div>
       </div>
      ) : (
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
      )}
     </div>
    </td>
   </tr>
  );
 }
}
export default OrderManageItem;
