import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Form(props) {
  const { inputChange, postQuiz, form, value, resetForm } = props;

  const onChange = (evt) => {
    console.log(value)
    inputChange({ inputId: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz({
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer,
    });
    resetForm();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.value} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.value} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.value} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
