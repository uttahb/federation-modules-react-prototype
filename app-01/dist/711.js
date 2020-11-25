(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([[711,558],{

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @material-ui/core@^4.9.4 (singleton) (fallback: ./node_modules/@material-ui/core/esm/index.js)
var index_js_ = __webpack_require__(399);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^5.1.2 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(819);
// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(558);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
;// CONCATENATED MODULE: ./src/Routes.jsx








const Routes = () => /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/React.createElement(IndexPage, null)), /*#__PURE__*/React.createElement(Route, {
  path: "/dialog",
  component: DialogPage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/ui-library",
  component: UiLibraryPage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/routing",
  component: RoutingPage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/svelte",
  component: SveltePage
}));

/* harmony default export */ const src_Routes = ((/* unused pure expression or super */ null && (Routes)));
;// CONCATENATED MODULE: ./src/SideNav.jsx



const drawerWidth = 240;
const useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
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
  return /*#__PURE__*/React.createElement(Drawer, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6"
  }, "SideNav")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(ListSubheader, null, "Demo Pages"), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: Link,
    to: "/"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Main"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: Link,
    to: "/ui-library"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "UI Library"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: Link,
    to: "/dialog"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Dialog"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: Link,
    to: "/svelte"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Svelte Page"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: Link,
    to: "/routing/foo"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Routing"
  })), /*#__PURE__*/React.createElement(ListSubheader, null, "Apps"), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3001"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "App #1",
    secondary: "http://localhost:3001"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3002"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "App #2",
    secondary: "http://localhost:3002"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3003"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "App #3",
    secondary: "http://localhost:3003"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3004"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "App #4",
    secondary: "http://localhost:3004"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    component: "a",
    href: "http://localhost:3005"
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "App #5",
    secondary: "http://localhost:3005"
  }))));
}
;// CONCATENATED MODULE: ./src/App.jsx





const App_useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
  root: {
    display: "flex"
  }
}));
const Header1 = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 908).then(__webpack_require__.t.bind(__webpack_require__, 908, 23)));
console.log(Header1);

function App() {
  const classes = App_useStyles();
  return /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.HashRouter, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.CssBaseline, null), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
    fallback: "Loading Dialog..."
  }, /*#__PURE__*/react_index_js_default().createElement(Header1, null))));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./src/bootstrap.jsx



react_dom_index_js_default().render( /*#__PURE__*/react_index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=711.js.map