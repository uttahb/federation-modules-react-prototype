(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./src/Routes.jsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNav */ "./src/SideNav.jsx");





const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  root: {
    display: "flex"
  }
}));
const Header1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_app_02_Header1").then(__webpack_require__.t.bind(__webpack_require__, /*! app_02/Header1 */ "webpack/container/remote/app_02/Header1", 23)));
console.log(Header1);

function App() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CssBaseline, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), {
    fallback: "Loading Dialog..."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Header1, null))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_dialog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dialog-page */ "./src/pages/dialog-page.jsx");
/* harmony import */ var _pages_dialog_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_dialog_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index-page */ "./src/pages/index-page.jsx");
/* harmony import */ var _pages_index_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_index_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_routing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/routing-page */ "./src/pages/routing-page.jsx");
/* harmony import */ var _pages_routing_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_routing_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_svelte_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/svelte-page */ "./src/pages/svelte-page.jsx");
/* harmony import */ var _pages_svelte_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_svelte_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ui-library-page */ "./src/pages/ui-library-page.jsx");
/* harmony import */ var _pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6__);








const Routes = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_pages_index_page__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/dialog",
  component: (_pages_dialog_page__WEBPACK_IMPORTED_MODULE_1___default())
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/ui-library",
  component: (_pages_ui_library_page__WEBPACK_IMPORTED_MODULE_6___default())
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/routing",
  component: (_pages_routing_page__WEBPACK_IMPORTED_MODULE_4___default())
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
  path: "/svelte",
  component: (_pages_svelte_page__WEBPACK_IMPORTED_MODULE_5___default())
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ "./src/SideNav.jsx":
/*!*************************!*\
  !*** ./src/SideNav.jsx ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SideNav
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const drawerWidth = 240;
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: { ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function SideNav() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
    variant: "h6"
  }, "SideNav")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListSubheader, null, "Demo Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Main"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/ui-library"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "UI Library"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Dialog"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/svelte"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Svelte Page"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: "/routing/foo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "Routing"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListSubheader, null, "Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3001"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #1",
    secondary: "http://localhost:3001"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3002"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #2",
    secondary: "http://localhost:3002"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3003"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #3",
    secondary: "http://localhost:3003"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3004"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #4",
    secondary: "http://localhost:3004"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3005"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.ListItemText, {
    primary: "App #5",
    secondary: "http://localhost:3005"
  }))));
}

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom?2b58");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/dialog-page.jsx":
/*!***********************************!*\
  !*** ./src/pages/dialog-page.jsx ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// import DialogMarkdown from "../docs/Dialog.md";
// import Markdown from "markdown-to-jsx";
// import Page from "../Page";
// import React from "react";
// const Dialog = React.lazy(() => import("app_02/Dialog"));
// const DialogPage = () => (
//   <Page title="Dialog Demo">
//     <Markdown>{DialogMarkdown}</Markdown>
//     <React.Suspense fallback="Loading Dialog...">
//       <Dialog />
//     </React.Suspense>
//   </Page>
// );
// export default DialogPage;

/***/ }),

/***/ "./src/pages/index-page.jsx":
/*!**********************************!*\
  !*** ./src/pages/index-page.jsx ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// import Markdown from "../Markdown";
// import Page from "../Page";
// import React from "react";
// import Welcome from "../docs/Welcome.md";
// import "app_05/components";
// const IndexPage = () => (
//   <Page title="Module Federation Demo">
//     <alert-box id="info" content="Alert from LitElement"></alert-box>
//     <Markdown>{Welcome}</Markdown>
//     <action-button foo="Lit Element Action"></action-button>
//   </Page>
// );
// export default IndexPage;

/***/ }),

/***/ "./src/pages/routing-page.jsx":
/*!************************************!*\
  !*** ./src/pages/routing-page.jsx ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// import Markdown from "markdown-to-jsx";
// import Page from "../Page";
// import React from "react";
// import Tabs from "../docs/Tabs.md";
// const RoutedTabs = React.lazy(() => import("app_02/Tabs"));
// const RoutingPage = () => (
//   <Page title="Routing Demo">
//     <Markdown>{Tabs}</Markdown>
//     <React.Suspense fallback="Loading Tabs...">
//       <RoutedTabs />
//     </React.Suspense>
//   </Page>
// );
// export default RoutingPage;

/***/ }),

/***/ "./src/pages/svelte-page.jsx":
/*!***********************************!*\
  !*** ./src/pages/svelte-page.jsx ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// import React from "react";
// import Page from "../Page";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import loadApp from "app_04/loadApp";
// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
// const SveltePage = () => {
//   const [name, setName] = React.useState("federation");
//   const mountEl = React.useRef();
//   const classes = useStyles();
//   React.useEffect(() => {
//     if (mountEl.current.innerHTML.length === 0) {
//       loadApp("app_04", name);
//     }
//   })
//   const handleChange = (e) => {
//     setName(e.target.value);
//     const event = new CustomEvent("change-name", {
//       detail: {
//         name: e.target.value
//       },
//       bubbles: true,
//       cancelable: true,
//       composed: true // makes the event jump shadow DOM boundary
//     });
//     let source = e.target || e.srcElement;
//     source.dispatchEvent(event);
//   }
//   return (
//     <Page title="Svelte Demo">
//       <form className={classes.root} noValidate autoComplete="off">
//         <TextField id="standard-basic" label="Name" value={name} onChange={(e) => handleChange(e)} />
//         <div id="app_04" ref={mountEl}></div>
//       </form>
//     </Page>
//   )
// }
// export default SveltePage;

/***/ }),

/***/ "./src/pages/ui-library-page.jsx":
/*!***************************************!*\
  !*** ./src/pages/ui-library-page.jsx ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// import Markdown from "markdown-to-jsx";
// import Page from "../Page";
// import React from "react";
// import UiLibraryMd from "../docs/UiLibrary.md";
// const Button = React.lazy(() => import("app_03/Button"));
// const UiLibraryPage = () => (
//   <Page title="UI Library Demo">
//     <Markdown>{UiLibraryMd}</Markdown>
//     <React.Suspense fallback="Loading Styled Button...">
//       <Button>&#128133; Button</Button>
//     </React.Suspense>
//   </Page>
// );
// export default UiLibraryPage;

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_jsx.js.map