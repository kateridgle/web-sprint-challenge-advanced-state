import React, { useEffect } from 'react';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

import { connect } from 'react-redux';



export function Quiz(props) {
  const { selectedAnswer, fetchQuiz, selectAnswer, postAnswer, quiz } = props;

  useEffect(() => {
    !quiz && fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {
        // is the quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz
          ? (
            <>
              <h2>{quiz.question}</h2>

              <div id="quizAnswers">
                <div className={`answer ${selectedAnswer === quiz.answers[0].answer_id ? `selected` : null}`}>
                  {quiz.answers[0].text}

                  <button onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                    {selectedAnswer === quiz.answers[0].answer_id ? `SELECTED` : `Select`}
                  </button>
                </div>

                <div className={`answer ${selectedAnswer === quiz.answers[1].answer_id ? `selected` : null}`}>
                  {quiz.answers[1].text}
                  <button onClick={() => selectAnswer(quiz.answers[1].answer_id)} >
                    {selectedAnswer === quiz.answers[1].answer_id ? `SELECTED` : `Select`}
                  </button>
                </div>
              </div>

              <button disabled={!selectedAnswer} id="submitAnswerBtn" onClick={() => postAnswer(quiz.quiz_id, selectedAnswer)}>Submit answer</button>
            </>
          ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  };
}


export default connect(mapStateToProps, { fetchQuiz, selectAnswer, postAnswer })(Quiz)