import React from 'react'
import { connect } from 'react-redux';
import * as types from '../state/action-types';
import * as actionCreators from '../state/action-creators'




export function Wheel(props) {
  const { moveClockwise, moveCounterClockwise, index} = props;
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>{index}</div>
        <div className="cog" style={{ "--i": 1 }}>{index}</div>
        <div className="cog" style={{ "--i": 2 }}>{index}</div>
        <div className="cog" style={{ "--i": 3 }}>{index}</div>
        <div className="cog" style={{ "--i": 4 }}>{index}</div>
        <div className="cog" style={{ "--i": 5 }}>{index}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={moveClockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel)
