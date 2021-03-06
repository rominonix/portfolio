import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./views/Home/Home";
import { getMenu } from "./data/actions/menu";
import { getSettings } from "./data/actions/settings";
import { getHome } from "./data/actions/home";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getSettings());
    dispatch(getHome());
  }, [dispatch]);

  return (
    // <BrowserRouter>
    <HashRouter basename={process.env.PUBLIC_URL}>

      <div className="bg"></div>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
    // </BrowserRouter>

  );
}

export default App;
