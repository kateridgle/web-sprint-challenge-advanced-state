import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators'


function Wheel(props) {
  const {index, moveClockwise, moveCounterClockwise} = props;
  console.log(props);
  const handleClick = (evt) =>{
    if (evt.target.id === "clockwiseBtn"){
      moveClockwise();
    }
  }
  
  const handleCounterClick = evt => {
    if (evt.target.id === "counterClockwiseBtn"){
      moveCounterClockwise();
    }
  }
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
        <button onClick={handleCounterClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClick} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return ({
    ...state,
    index: state.index})
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
