import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
     <Switch>
        <Route path="/shop/hats" component={ HatsPage } />
        <Route path="/" component={ HomePage } />
     </Switch>
    </div>
  );
}

export default App;
