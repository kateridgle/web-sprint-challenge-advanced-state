import React from 'react'
import { moveClockwise } from '../state/action-creators'
import { connect } from 'react-redux';

function Wheel(props) {
  const {index} = props;
  const handleClick = (evt) =>{
    dispatch(moveClockwise());
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>{props.index}</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={handleClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClick} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return state.index
}

export default connect(mapStateToProps)(Wheel);
