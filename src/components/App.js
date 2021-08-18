import Header from "./Header";
import Footer from "./Footer";
import Character from "./Character";
import Characters from "./Characters";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [ isdataLoading, setDataLoading] = useState(true);
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
    .then(res => res.json())
    .then(data => {
      setCharacters(data);
      setDataLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Characters characters={characters} loading={isdataLoading} />
          </Route>
          <Route exact path="/character/:charId" component={Character} />
          <Route exact component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
