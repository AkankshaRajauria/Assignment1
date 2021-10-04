import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
