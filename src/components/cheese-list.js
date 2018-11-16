/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Component } from 'react';
import { fetchCheeses } from '../actions/cheese';
import { connect } from "react-redux";

export class CheeseList extends Component {
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }
  render(){
    const cheesesList = this.props.cheeses.map((cheese) => {
      return (
        <li>{cheese}</li>
      )
    });
    return(
      <ul>{cheesesList}</ul>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    cheeses: state.cheeses
  });
}

export default connect(mapStateToProps)(CheeseList);
// export default function CheeseList() {
//     let cheeselist = cheeses.map(function(cheese){
//       return <li>{cheese}</li>;
//     });
//     return (
//       <div>
//         <ul>
//           {cheeselist}
//         </ul>
//       </div>
//     )
  
// }
