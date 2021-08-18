import Header from "./Header";
import Footer from "./Footer";
import Character from "./Character";
import Characters from "./Characters";
import ErrorPage from "./ErrorPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const characters = [
    {
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
    {
      char_id: 2,
      name: "Jesse Pinkman",
      birthday: "09-24-1984",
      occupation: ["Meth Dealer"],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      status: "Alive",
      nickname: "Cap n' Cook",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Aaron Paul",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
    {
      char_id: 4,
      name: "Walter White Jr.",
      birthday: "07-08-1993",
      occupation: ["Teenager"],
      img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
      status: "Alive",
      nickname: "Flynn",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "RJ Mitte",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
    {
      char_id: 5,
      name: "Henry Schrader",
      birthday: "Unknown",
      occupation: ["DEA Agent"],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
      status: "Deceased",
      nickname: "Hank",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Dean Norris",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
    {
      char_id: 6,
      name: "Marie Schrader",
      birthday: "Unknown",
      occupation: ["Housewife", "Clepto"],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
      status: "Alive",
      nickname: "Marie",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Betsy Brandt",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Characters characters={characters} />
          </Route>
          <Route exact path="/character" component={Character}/>
          <Route exact component={ErrorPage}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
