import Header from "./Header";
import Footer from "./Footer";
import Character from "./Character";
import Characters from "./Characters";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/character/:charId" component={Character} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
