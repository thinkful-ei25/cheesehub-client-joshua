/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Component } from 'react';
import { fetchCheeses } from '../actions/cheese';
import { connect } from "react-redux";

class CheeseList extends Component {
  componentDidMount(){
    // console.log('comonent mounted');
    this.props.dispatch(fetchCheeses());
  }
  render(){
    const cheesesList = this.props.cheeses.map((cheese, i) => {
      return (
        <li key={i}>{cheese}</li>
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
