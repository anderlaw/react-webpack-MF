(self["webpackChunkcomponent_app"] = self["webpackChunkcomponent_app"] || []).push([["src_Dialog_jsx"],{

/***/ "./src/Dialog.jsx":
/*!************************!*\
  !*** ./src/Dialog.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_0__);

class Dialog extends (lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,.3)"
        }
      }, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: () => this.props.switchVisible(false),
        style: {
          position: "absolute",
          top: "10px",
          right: "10px"
        }
      }, "X"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          marginTop: "20%",
          textAlign: "center"
        }
      }, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "What is your name ?"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        style: {
          fontSize: "18px",
          lineHeight: 2
        },
        type: "text"
      })));
    } else {
      return null;
    }
  }

}

/***/ })

}]);