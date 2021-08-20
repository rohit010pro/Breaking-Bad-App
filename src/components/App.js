import Header from "./Header";
import Footer from "./Footer";
import Character from "./Character";
import Characters from "./Characters";
import Pagination from "./Pagination";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
        setLoading(false);
      });
  }, []);

  const pages = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemPerPage); i++)
    pages.push(i);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Characters characters={currentItems} isLoading={isLoading}/>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} isLoading={isLoading}/>
          </Route>
          <Route exact path="/character/:charId" component={Character} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
