import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Wishlist from './components/Wishlist';
import Order from './components/Order';
import ProductDescription from "./components/ProductDescription";


function App() {
  return (
    <BrowserRouter>
      <div className="fonts">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/wishlist" component={Wishlist}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/product/:id" component={ProductDescription}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
