import React from 'react'
import { connect } from 'react-redux';
import * as types from '../state/action-types';
import * as actionCreators from '../state/action-creators'




export function Wheel(props) {
  const { moveClockwise, moveCounterClockwise, wheel} = props;
  
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>{wheel}</div>
        <div className="cog" style={{ "--i": 1 }}>{wheel}</div>
        <div className="cog" style={{ "--i": 2 }}>{wheel}</div>
        <div className="cog" style={{ "--i": 3 }}>{wheel}</div>
        <div className="cog" style={{ "--i": 4 }}>{wheel}</div>
        <div className="cog" style={{ "--i": 5 }}>{wheel}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={moveClockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel)
