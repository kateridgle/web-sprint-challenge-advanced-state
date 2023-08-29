// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios";
import * as types from './action-types';


export function moveClockwise() {
  return ({ type: types.MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return ({ type: types.MOVE_COUNTERCLOCKWISE })
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

export function inputChange({ inputId, value }) {
  return ({
    type: types.INPUT_CHANGE,
    payload: { inputId, value }
  })
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
        const error = (error = err.data ? err.data : err.message)
        dispatch(error)
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer({quizId,answerId}) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {
      message: message,
      answer: answerId,
      quiz: quizId})
      .then(res => {
        dispatch({ types: types.SET_SELECTED_ANSWER, message: res.data.message })
      })
      .catch(err => {
        const error = (error = err.data ? err.data : err.message)
        dispatch(error)
      })
      .finally(()=>{
        dispatch(fetchQuiz())
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {
      question: newQuestion,
      trueAnswer: newTrueAnswer,
      falseAnswer: newFalseAnswer,
    })
      .then(res => {
        dispatch({ types: types.SET_INFO_MESSAGE, types: types.RESET_FORM, payload: { newQuestion, newTrueAnswer, newFalseAnswer } })
      })
      .catch(err => {
        const error = (error = err.data ? err.data : err.message)
        dispatch(error)
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
