/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import { connect } from "react-redux";


const cheeses = [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
]

export default function CheeseList() {
    let cheeselist = cheeses.map(function(cheese){
      return <li>{cheese}</li>;
    });
    return (
      <div>
        <ul>
          {cheeselist}
        </ul>
      </div>
    )
  
}
