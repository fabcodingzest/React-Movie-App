import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/detail/:title"
        render={routeProps => <DetailPage routeProps={routeProps} />}
      />
    </Switch>
  );
}

export default App;
