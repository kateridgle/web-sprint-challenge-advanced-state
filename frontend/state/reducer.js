// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case types.MOVE_CLOCKWISE:
      if(state.index < 6 ){
        return state.index + 1
      }
      else {
        return 0
      } 
    case types.MOVE_COUNTERCLOCKWISE:
      if(state.index > 0 || state.index < 6) {
        return state.index - 1
      } else {
        return 5
      }
       
  }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case types.SET_QUIZ_INTO_STATE:
    case types.SET_SELECTED_ANSWER: 
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER:
      return state.selectedAnswer //answer or answer selected from quiz.js
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case types.SET_INFO_MESSAGE:
      return state.message //default?
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case types.INPUT_CHANGE:
      return 
        state.value
    case types.RESET_FORM:
      return initialFormState
      
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
