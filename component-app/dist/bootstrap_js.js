(self["webpackChunkcomponent_app"] = self["webpackChunkcomponent_app"] || []).push([["bootstrap_js"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Dialog */ "./src/Dialog.jsx");
/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Button */ "./src/Button.jsx");



class App extends (lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
  }

  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true
    });
  }

  HanldeSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible
    });
  }

  render() {
    return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Button__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleClick
    }, "\u6253\u5F00\u5BF9\u8BDD\u6846"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Dialog__WEBPACK_IMPORTED_MODULE_1__.default, {
      switchVisible: this.HanldeSwitchVisible,
      visible: this.state.dialogVisible
    }));
  }

}

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./App.jsx");
/* harmony import */ var lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib-app/react-dom */ "webpack/container/remote/lib-app/react-dom");
/* harmony import */ var lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_2__);



lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById("app"));

/***/ }),

/***/ "./src/Button.jsx":
/*!************************!*\
  !*** ./src/Button.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      color: "#fff",
      backgroundColor: "#409eff",
      borderColor: "#409eff"
    }
  }, "\u6309\u94AE\u7EC4\u4EF6");
}

/***/ }),

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