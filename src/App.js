import { useState, useEffect } from "react";
import "./App.css";
import Navbar2 from "./Component/Navbar2";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import People from "./Component/People";

function App() {
  const [starwars, setStarwars] = useState([]);
  const getStarwars = () =>
    fetch("https://swapi.dev/api/people/1/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  useEffect(() => {
    getStarwars().then((data) =>
    { setStarwars(data)
   console.log(data)
  })
}, []);

var kamy=[{name:"kamy", age:"25", gender:"female"}]

  return (
    <Router>
      <div className="App">
        <Navbar2 />
        {kamy.map((el)=>  <div style={{color:"red"}}>{el.name}{el.gender}{el.age}</div>)}
              {/*starwars.map((el)=> <People gender={el.gender}/>)*/}

        <Switch>
          <Route path="/people">
            <People />
            
          </Route>

          <Route exact path="/">
          CCCC
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


//var tab= starwars.map(el=> { gender :el.gender});


  

  
 
