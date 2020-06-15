import React from "react";
import MainStructure from "components/structure/MainStructure";
import "./OrderManage.css";
import $ from "jquery";
import { Component } from "react";

class OrderManage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Activate Bootstrap scrollspy for the sticky nav component
    $("body").scrollspy({
      target: "#stickyNav",
      offset: 0,
    });
    // Scrolls to an offset anchor when a sticky nav link is clicked
    $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
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
                  <span>오더 관리</span>
                </h1>
                <div className="page-header-subtitle">
                  오더와 지원자를 관리합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-n10">
            <div className="row">
              <div className="col-lg-9">
                <div id="default">
                  <div className="card mb-4">
                    <div className="card-header">오더 관리</div>
                    <div className="card-body">
                      <div className="sbp-preview">
                        <div className="sbp-preview-content">
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                Email address
                              </label>
                              <input
                                className="form-control"
                                id="exampleFormControlInput1"
                                type="email"
                                placeholder="name@example.com"
                                key="exampleFormControlInput1"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">
                                Example select
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect2">
                                Example multiple select
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect2"
                                multiple=""
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">
                                Example textarea
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsDefaultTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsDefaultHtmlTab"
                                data-toggle="tab"
                                href="#formsDefaultHtml"
                                role="tab"
                                aria-controls="formsDefaultHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsDefaultPugTab"
                                data-toggle="tab"
                                href="#formsDefaultPug"
                                role="tab"
                                aria-controls="formsDefaultPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsDefaultHtml"
                              role="tabpanel"
                              aria-labelledby="formsDefaultHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      form
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlInput1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Email address
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlInput1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      email
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      placeholder
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      name@example.com
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example select
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      select
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  3
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  4
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  5
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      select
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example multiple select
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      select
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      multiple
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  3
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  4
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  5
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      select
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlTextarea1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example textarea
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      textarea
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlTextarea1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      rows
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      textarea
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      form
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsDefaultPug"
                              role="tabpanel"
                              aria-labelledby="formsDefaultPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">form</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlInput1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Email address
                                  </span>
                                  <span className="token tag">
                                    input#exampleFormControlInput1.form-control
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'email'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        placeholder
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'name@example.com'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlSelect1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example select
                                  </span>
                                  <span className="token tag">
                                    select#exampleFormControlSelect1.form-control
                                  </span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">1</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">2</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">3</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">4</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">5</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlSelect2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example multiple select
                                  </span>
                                  <span className="token tag">
                                    select#exampleFormControlSelect2.form-control
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        multiple
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">''</span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">1</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">2</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">3</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">4</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">5</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlTextarea1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example textarea
                                  </span>
                                  <span className="token tag">
                                    textarea#exampleFormControlTextarea1.form-control
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        rows
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          '3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          The default Bootstrap form control states have been
                          restyled to fit the SB Admin Pro theme. The style has
                          changed, but the markup is identical.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="solid">
                  <div className="card mb-4">
                    <div className="card-header">
                      Custom Solid Form Controls
                    </div>
                    <div className="card-body">
                      <div className="sbp-preview">
                        <div className="sbp-preview-content">
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput2">
                                Email address
                              </label>
                              <input
                                className="form-control form-control-solid"
                                id="exampleFormControlInput2"
                                type="email"
                                placeholder="name@example.com"
                                key="exampleFormControlInput2"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect3">
                                Example select
                              </label>
                              <select
                                className="form-control form-control-solid"
                                id="exampleFormControlSelect3"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect4">
                                Example multiple select
                              </label>
                              <select
                                className="form-control form-control-solid"
                                id="exampleFormControlSelect4"
                                multiple=""
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea2">
                                Example textarea
                              </label>
                              <textarea
                                className="form-control form-control-solid"
                                id="exampleFormControlTextarea2"
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsSolidTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsSolidHtmlTab"
                                data-toggle="tab"
                                href="#formsSolidHtml"
                                role="tab"
                                aria-controls="formsSolidHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsSolidPugTab"
                                data-toggle="tab"
                                href="#formsSolidPug"
                                role="tab"
                                aria-controls="formsSolidPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsSolidHtml"
                              role="tabpanel"
                              aria-labelledby="formsSolidHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      form
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlInput1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Email address
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control form-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlInput1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      email
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      placeholder
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      name@example.com
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example select
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      select
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control form-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  3
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  4
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  5
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      select
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example multiple select
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      select
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control form-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlSelect2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      multiple
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  3
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  4
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  5
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      option
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      select
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-group
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlTextarea1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Example textarea
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      textarea
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      form-control form-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      exampleFormControlTextarea1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      rows
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      textarea
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      form
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsSolidPug"
                              role="tabpanel"
                              aria-labelledby="formsSolidPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">form</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlInput1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Email address
                                  </span>
                                  <span className="token tag">
                                    input#exampleFormControlInput1.form-control.form-control-solid
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'email'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        placeholder
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'name@example.com'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlSelect1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example select
                                  </span>
                                  <span className="token tag">
                                    select#exampleFormControlSelect1.form-control.form-control-solid
                                  </span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">1</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">2</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">3</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">4</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">5</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlSelect2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example multiple select
                                  </span>
                                  <span className="token tag">
                                    select#exampleFormControlSelect2.form-control.form-control-solid
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        multiple
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">''</span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">1</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">2</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">3</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">4</span>
                                  <span className="token tag">option</span>{" "}
                                  <span className="token plain-text">5</span>
                                  <span className="token tag">.form-group</span>
                                  <span className="token tag">
                                    label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'exampleFormControlTextarea1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Example textarea
                                  </span>
                                  <span className="token tag">
                                    textarea#exampleFormControlTextarea1.form-control.form-control-solid
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        rows
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          '3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          Custom solid form controls have been developed as an
                          alternative to the default form styling. Use them by
                          appending the <code>.form-control-solid</code> to the
                          normal <code>.form-control</code> class.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="checkbox">
                  <div className="card mb-4">
                    <div className="card-header">
                      Custom Checkboxes &amp; Radio
                    </div>
                    <div className="card-body">
                      <h6 className="small text-muted font-weight-500">
                        Bootstrap Custom Checkboxes:
                      </h6>
                      <div className="sbp-preview mb-4">
                        <div className="sbp-preview-content">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheck1"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Custom Checkbox 1
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheck2"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Custom Checkbox 2
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheck3"
                              type="checkbox"
                              disabled=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              Custom Checkbox (Disabled)
                            </label>
                          </div>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsCheckboxesTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsCheckboxesHtmlTab"
                                data-toggle="tab"
                                href="#formsCheckboxesHtml"
                                role="tab"
                                aria-controls="formsCheckboxesHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsCheckboxesPugTab"
                                data-toggle="tab"
                                href="#formsCheckboxesPug"
                                role="tab"
                                aria-controls="formsCheckboxesPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsCheckboxesHtml"
                              role="tabpanel"
                              aria-labelledby="formsCheckboxesHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox 1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox 2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      disabled
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheck3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox (Disabled)
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsCheckboxesPug"
                              role="tabpanel"
                              aria-labelledby="formsCheckboxesPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">
                                    .custom-control.custom-checkbox
                                  </span>
                                  <span className="token tag">
                                    input#customCheck1.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheck1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox 1
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-checkbox
                                  </span>
                                  <span className="token tag">
                                    input#customCheck2.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheck2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox 2
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-checkbox
                                  </span>
                                  <span className="token tag">
                                    input#customCheck3.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        disabled
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheck3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox (Disabled)
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          Bootstrap's custom checkbox styling has been modified
                          for the SB Admin Pro theme.
                        </div>
                      </div>
                      <h6 className="small text-muted font-weight-500">
                        Bootstrap Custom Radio:
                      </h6>
                      <div className="sbp-preview">
                        <div className="sbp-preview-content">
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="customRadio1"
                              type="radio"
                              name="customRadio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="customRadio2"
                              type="radio"
                              name="customRadio"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              Or toggle this other custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="customRadio3"
                              type="radio"
                              name="customRadio"
                              disabled=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio3"
                            >
                              This radio is disabled
                            </label>
                          </div>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsRadioTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsRadioHtmlTab"
                                data-toggle="tab"
                                href="#formsRadioHtml"
                                role="tab"
                                aria-controls="formsRadioHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsRadioPugTab"
                                data-toggle="tab"
                                href="#formsRadioPug"
                                role="tab"
                                aria-controls="formsRadioPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsRadioHtml"
                              role="tabpanel"
                              aria-labelledby="formsRadioHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Toggle this custom radio
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Or toggle this other custom radio
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      disabled
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadio3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  This radio is disabled
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsRadioPug"
                              role="tabpanel"
                              aria-labelledby="formsRadioPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">
                                    .custom-control.custom-radio
                                  </span>
                                  <span className="token tag">
                                    input#customRadio1.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Toggle this custom radio
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-radio
                                  </span>
                                  <span className="token tag">
                                    input#customRadio2.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Or toggle this other custom radio
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-radio
                                  </span>
                                  <span className="token tag">
                                    input#customRadio3.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        disabled
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadio3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    This radio is disabled
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          Bootstrap's custom radio styling has also been
                          modified for the SB Admin Pro theme.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="checkboxSolid">
                  <div className="card mb-4">
                    <div className="card-header">
                      Solid Checkboxes &amp; Radio
                    </div>
                    <div className="card-body">
                      <h6 className="small text-muted font-weight-500">
                        Custom Solid Checkboxes:
                      </h6>
                      <div className="sbp-preview mb-4">
                        <div className="sbp-preview-content">
                          <div className="custom-control custom-checkbox custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customCheckSolid1"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckSolid1"
                            >
                              Custom Checkbox 1
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customCheckSolid2"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckSolid2"
                            >
                              Custom Checkbox 2
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customCheckSolid3"
                              type="checkbox"
                              disabled=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckSolid3"
                            >
                              Custom Checkbox (Disabled)
                            </label>
                          </div>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsCheckboxesSolidTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsCheckboxesSolidHtmlTab"
                                data-toggle="tab"
                                href="#formsCheckboxesSolidHtml"
                                role="tab"
                                aria-controls="formsCheckboxesSolidHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsCheckboxesSolidPugTab"
                                data-toggle="tab"
                                href="#formsCheckboxesSolidPug"
                                role="tab"
                                aria-controls="formsCheckboxesSolidPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsCheckboxesSolidHtml"
                              role="tabpanel"
                              aria-labelledby="formsCheckboxesSolidHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox 1
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox 2
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-checkbox
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      checkbox
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      disabled
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customCheckSolid3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Custom Checkbox (Disabled)
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsCheckboxesSolidPug"
                              role="tabpanel"
                              aria-labelledby="formsCheckboxesSolidPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">
                                    .custom-control.custom-checkbox.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customCheckSolid1.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheckSolid1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox 1
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-checkbox.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customCheckSolid2.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheckSolid2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox 2
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-checkbox.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customCheckSolid3.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'checkbox'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        disabled
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customCheckSolid3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Custom Checkbox (Disabled)
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          The <code>.custom-control-solid</code> can be used
                          with a <code>.custom-control</code> class to get a
                          solid styling for custom checkboxes.
                        </div>
                      </div>
                      <h6 className="small text-muted font-weight-500">
                        Custom Solid Radio:
                      </h6>
                      <div className="sbp-preview">
                        <div className="sbp-preview-content">
                          <div className="custom-control custom-radio custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customRadioSolid1"
                              type="radio"
                              name="customRadioSolid"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioSolid1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customRadioSolid2"
                              type="radio"
                              name="customRadioSolid"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioSolid2"
                            >
                              Or toggle this other custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-solid">
                            <input
                              className="custom-control-input"
                              id="customRadioSolid3"
                              type="radio"
                              name="customRadioSolid"
                              disabled=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioSolid3"
                            >
                              This radio is disabled
                            </label>
                          </div>
                        </div>
                        <div className="sbp-preview-code">
                          <ul
                            className="nav nav-tabs"
                            id="formsRadioSolidTabs"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active mr-1"
                                id="formsRadioSolidHtmlTab"
                                data-toggle="tab"
                                href="#formsRadioSolidHtml"
                                role="tab"
                                aria-controls="formsRadioSolidHtml"
                                aria-selected="true"
                              >
                                <svg
                                  className="svg-inline--fa fa-html5 fa-w-12 text-orange mr-1"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="html5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                                  ></path>
                                </svg>
                                HTML
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="formsRadioSolidPugTab"
                                data-toggle="tab"
                                href="#formsRadioSolidPug"
                                role="tab"
                                aria-controls="formsRadioSolidPug"
                                aria-selected="false"
                              >
                                PUG
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="formsRadioSolidHtml"
                              role="tabpanel"
                              aria-labelledby="formsRadioSolidHtmlTab"
                            >
                              <pre className="  language-markup">
                                <code className="  language-markup">
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid1
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Toggle this custom radio
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid2
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  Or toggle this other custom radio
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      div
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control custom-radio
                                      custom-control-solid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      input
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-input
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">id</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      type
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      radio
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      name
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">
                                      disabled
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;
                                      </span>
                                      label
                                    </span>{" "}
                                    <span className="token attr-name">
                                      class
                                    </span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      custom-control-label
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>{" "}
                                    <span className="token attr-name">for</span>
                                    <span className="token attr-value">
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token punctuation">
                                        "
                                      </span>
                                      customRadioSolid3
                                      <span className="token punctuation">
                                        "
                                      </span>
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  This radio is disabled
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      label
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    <span className="token tag">
                                      <span className="token punctuation">
                                        &lt;/
                                      </span>
                                      div
                                    </span>
                                    <span className="token punctuation">
                                      &gt;
                                    </span>
                                  </span>
                                </code>
                              </pre>
                            </div>
                            <div
                              className="tab-pane"
                              id="formsRadioSolidPug"
                              role="tabpanel"
                              aria-labelledby="formsRadioSolidPugTab"
                            >
                              <pre className="  language-pug">
                                <code className="  language-pug">
                                  <span className="token tag">
                                    .custom-control.custom-radio.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customRadioSolid1.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid1'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Toggle this custom radio
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-radio.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customRadioSolid2.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid2'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    Or toggle this other custom radio
                                  </span>
                                  <span className="token tag">
                                    .custom-control.custom-radio.custom-control-solid
                                  </span>
                                  <span className="token tag">
                                    input#customRadioSolid3.custom-control-input
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        type
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'radio'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        name
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        ,
                                      </span>{" "}
                                      <span className="token attr-name">
                                        disabled
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>
                                  <span className="token tag">
                                    label.custom-control-label
                                    <span className="token attributes">
                                      <span className="token punctuation">
                                        (
                                      </span>
                                      <span className="token attr-name">
                                        for
                                      </span>
                                      <span className="token punctuation">
                                        =
                                      </span>
                                      <span className="token attr-value">
                                        <span className="token string">
                                          'customRadioSolid3'
                                        </span>
                                      </span>
                                      <span className="token punctuation">
                                        )
                                      </span>
                                    </span>
                                  </span>{" "}
                                  <span className="token plain-text">
                                    This radio is disabled
                                  </span>
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="sbp-preview-text">
                          The <code>.custom-control-solid</code> works with
                          custom radios as well.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-icon mb-4">
                  <div className="row no-gutters">
                    <div className="col-auto card-icon-aside bg-secondary">
                      <svg
                        className="svg-inline--fa fa-bootstrap fa-w-14 mr-1 text-white-50"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="bootstrap"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"
                        ></path>
                      </svg>
                    </div>
                    <div className="col">
                      <div className="card-body py-5">
                        <h5 className="card-title">
                          Bootstrap Documentation Available
                        </h5>
                        <p className="card-text">
                          Forms are a default component included with the
                          Bootstrap framework. For more information on
                          implementing, modifying, and extending the usage of
                          forms within your project, visit the official
                          Bootstrap forms documentation page.
                        </p>
                        <a
                          className="btn btn-secondary btn-sm"
                          href="https://getbootstrap.com/docs/4.4/components/forms/"
                          target="_blank"
                        >
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
                            className="feather feather-external-link mr-1"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Visit Bootstrap Forms Docs
                        </a>
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
