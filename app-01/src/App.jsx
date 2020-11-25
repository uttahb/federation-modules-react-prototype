import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";

import { HashRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);
const Header1 = React.lazy(() => import("app_02/Header1"));
console.log(Header1);
function App() {
  const classes = useStyles();

  return (
    <HashRouter>
      <CssBaseline />
      <div className={classes.root}>
        <React.Suspense fallback="Loading Dialog...">
          <Header1 />
        </React.Suspense>
        {/* <SideNav />
        <Routes /> */}
      </div>
    </HashRouter>
  );
}

export default App;
