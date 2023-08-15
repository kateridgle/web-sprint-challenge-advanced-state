import React from 'react'
import { connect } from 'react-redux'

function Message(props) {
  const { message } = props;
  return <div id="message">{props.message}</div>
  //keep as message ven though wants props. will pass it state
}

const mapStateToProps = (state) => {
  return ({
    ...state,
    message: state.message
  })
}

export default connect(mapStateToProps)(Message)
