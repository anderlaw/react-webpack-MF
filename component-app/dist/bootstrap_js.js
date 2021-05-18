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
/* harmony import */ var _src_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Logo */ "./src/Logo.jsx");
/* harmony import */ var _src_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Dialog */ "./src/Dialog.jsx");
/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Button */ "./src/Button.jsx");




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
    return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Logo__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Button__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleClick
    }, "\u6253\u5F00\u5BF9\u8BDD\u6846"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Dialog__WEBPACK_IMPORTED_MODULE_2__.default, {
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
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_0__);

const styleMapping = {
  'primary': {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#409eff",
    borderColor: "#409eff",
    padding: "12px 20px",
    fontSize: '14px',
    borderRadius: '4px',
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  },
  'warning': {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#e6a23c",
    borderColor: "#e6a23c",
    padding: "12px 20px",
    fontSize: '14px',
    borderRadius: '4px',
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  }
};
class Button extends (lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    var type = this.props.type || 'primary';
    return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      style: styleMapping[type]
    }, type, " Button");
  }

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

const wrapperStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2000,
  height: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  overflow: "auto"
};
const boxStyle = {
  width: "30%",
  margin: "0 auto 50px",
  marginTop: "15vh",
  padding: "20px",
  backgroundColor: "#fff"
};
class Dialog extends (lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: wrapperStyle
      }, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: boxStyle
      }, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "What is your name ?"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        style: {
          fontSize: "18px",
          lineHeight: 2
        },
        type: "text"
      })), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        style: {
          marginTop: "10px"
        },
        onClick: () => this.props.switchVisible(false)
      }, "close It!")));
    } else {
      return null;
    }
  }

}

/***/ })

}]);