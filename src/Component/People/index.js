import React from "react";
//import { useContext, useEffect, useState } from 'react';

function People(props) {
  return (
    <div className="people">
      <div className="card.title"><h1>the liste of people is here</h1></div>  
       <div className="info-people">{props.gender}</div>
    </div>
  );
}
export default People;