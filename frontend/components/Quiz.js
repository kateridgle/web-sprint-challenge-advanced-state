import { useEffect, React } from 'react';
import * as actionCreators from '../state/action-creators'

import { connect } from 'react-redux';



export function Quiz(props) {
  const { selectedAnswer, fetchQuiz, selectAnswer, postAnswer, setQuiz, quiz } = props;

  useEffect(() => {
    // if answer submited fetchQuiz();
    fetchQuiz()
  }, [])

  return (
    <div>
      <div id="wrapper">
        {
          // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
          quiz ? (
            <>
              <h2>{quiz.question}</h2>

              <div id="quizAnswers">
                <div
                  className={answer${
                ...selectedAnswer === quiz.answers[0].answer_id ? " selected" : ""
                  }}
                onClick={() => selectAnswer(quiz.answers[0].answer_id)}
                  >
                {quiz.answers[0].text}
                <button>
                  {selectedAnswer === quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
                <div
                  className={answer${
                ...selectedAnswer === quiz.answers[1].answer_id ? " selected" : ""
                  }}
                onClick={() => selectAnswer(quiz.answers[1].answer_id)}
                >
                {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <button id="submitAnswerBtn">Submit answer</button>
            </>
          ) : 'Loading next quiz...'
        }
      </div>
    </div >
  )
}


export default connect(st => st, actionCreators)(Quiz)
