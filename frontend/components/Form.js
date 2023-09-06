import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from "../state/action-creators";


export function Form(props) {
  const { inputChange, postQuiz, form} = props;

  const onChange = (evt) => {
    const { id, value } = evt.target
    inputChange( id, value )
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(form);
  };

  const setDisabled = () => Object.values(form).some(value => !value.trim().length);

  return (
    <form id="form" onSubmit={(evt) => onSubmit(evt)}>
      <h2>Create New Quiz</h2>
      <input name='question' value={form.newQuestion} maxLength={50} onChange={(evt) => onChange(evt)}id="newQuestion" placeholder="Enter question"/>
      <input name='correct' value={form.newTrueAnswer} maxLength={50} onChange={(evt) => onChange(evt)} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name='incorrect' value={form.newFalseAnswer} maxLength={50} onChange={(evt) => onChange(evt)} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={setDisabled()}>Submit new quiz</button>
    </form>
  )
}



export default connect((st) => st, actionCreators)(Form);