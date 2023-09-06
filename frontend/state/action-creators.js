// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios";
import * as types from './action-types';


export function moveClockwise(value) {
  return ({ type: types.MOVE_CLOCKWISE, payload: value })
}

export function moveCounterClockwise(value) {
  return ({ type: types.MOVE_COUNTERCLOCKWISE, payload: value })
}

export function selectAnswer(answerId) {
  return ({
    type: types.SET_SELECTED_ANSWER,
    payload: answerId
  })
}

export function setMessage(message) { //pass payload data as message??
  return ({
    type: types.SET_INFO_MESSAGE,
    payload: message
  })
}

export function setQuiz(quiz) {
  return ({
    type: types.SET_QUIZ_INTO_STATE,
    payload: quiz
  })
}

export function inputChange(inputId, value) {
  return ( {type: types.INPUT_CHANGE, payload: {inputId, value}}
  )
}

export function resetForm() {
  return ({ type: types.RESET_FORM })
}
// 
// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(res.data))
      })
      .catch(err => {
        const errormsg = (err.response ? err.response.data.message : err.message)
        dispatch(setMessage(errormsg))
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
      .then(res => {
        dispatch({ type: types.SET_SELECTED_ANSWER, payload: null })
        dispatch({ type: types.SET_INFO_MESSAGE, payload: res.data.message })
      })
      .catch(err => {
        const errormsg = (err.response ? err.response.data.message : err.message)
        dispatch(setMessage(errormsg))
      })
      .finally(
        dispatch(fetchQuiz(dispatch))
      )
    // `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', { question_text: newQuestion, true_answer_text: newTrueAnswer, false_answer_text: newFalseAnswer})
      .then(res => {
        dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
        
      })
      .catch(err => {
        const errormsg = (err.response ? err.response.data.message : err.message)
        dispatch(setMessage(errormsg))
      })
      .finally(
        dispatch(resetForm(dispatch))
      )
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
