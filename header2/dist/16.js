(self["webpackChunk_comprehensive_demo_app_02"] = self["webpackChunk_comprehensive_demo_app_02"] || []).push([[16],{

/***/ 6016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(5558);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(8568);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js + 10 modules
var IconButton = __webpack_require__(9840);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var Menu = __webpack_require__(8884);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(8995);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoreVert.js
var MoreVert = __webpack_require__(8513);
;// CONCATENATED MODULE: ./src/Hello.jsx

function Hello() {
  return /*#__PURE__*/index_js_default().createElement("div", null, "Hello");
}
;// CONCATENATED MODULE: ./src/Header1.jsx










const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end'
  }
}));
function Header2() {
  const classes = useStyles();
  return /*#__PURE__*/index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/index_js_default().createElement(AppBar/* default */.Z, {
    position: "static"
  }, /*#__PURE__*/index_js_default().createElement(Toolbar/* default */.Z, {
    className: classes.toolbar
  }, /*#__PURE__*/index_js_default().createElement(IconButton/* default */.Z, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer"
  }, /*#__PURE__*/index_js_default().createElement(Menu/* default */.Z, null)), /*#__PURE__*/index_js_default().createElement(Typography/* default */.Z, {
    className: classes.title,
    variant: "h5",
    noWrap: true
  }, "Material-UI ", /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement(Hello, null))), /*#__PURE__*/index_js_default().createElement(IconButton/* default */.Z, {
    "aria-label": "search",
    color: "inherit"
  }, /*#__PURE__*/index_js_default().createElement(Search/* default */.Z, null)), /*#__PURE__*/index_js_default().createElement(IconButton/* default */.Z, {
    "aria-label": "display more actions",
    edge: "end",
    color: "inherit"
  }, /*#__PURE__*/index_js_default().createElement(MoreVert/* default */.Z, null)))));
}
;// CONCATENATED MODULE: ./src/App.jsx



function App() {
  return /*#__PURE__*/index_js_default().createElement("div", null, /*#__PURE__*/index_js_default().createElement(Header2, null));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(2169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./src/bootstrap.js



react_dom_index_js_default().render( /*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=16.js.map