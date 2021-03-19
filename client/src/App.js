import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Facts from "./components/Facts";
import Update from "./components/Update";
import NotFound from "./components/404";
import "./App.css";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <h1 id="header">Today I Learned:</h1>
        <span id="headerTwo">FULL CRUD</span>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/facts" component={Facts} />
          <Route path="/update" component={Update} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
