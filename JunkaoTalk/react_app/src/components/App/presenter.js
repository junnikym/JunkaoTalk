import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import Main from "../Main";
import Auth from "../Auth";
import Setting from "../Setting"; // for temp

import "../../shared/base.scss"

const App = props => {

  return (
    <div className="base">
      {[
        props.isLoggedIn ?  <Setting key={1}/> : <PublicRoutes key={1} />,
        // // props.isLoggedIn ? <Navigation key={1} /> : null,
        // // props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
        // // <Footer key={3} />
        <Main/>
      ]}
    </div>
  )

}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

// const PrivateRoutes = props => (
//   <Switch>
//     <Route exact path="/" render={() => "recover password"} />
//   </Switch>
// );

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    {/* <Redirect path="*" to="/" /> */}
  </Switch>
);

export default App;
