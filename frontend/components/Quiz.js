import {useEffect, React} from 'react';
import * as actionCreators from '../state/action-creators'

import {connect} from 'react-redux';



function Quiz(props) {
  const {selectAnswer, fetchQuiz, postQuiz, postAnswer, setQuiz}=props;

  useEffect(()=>{
    fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function 
                {/* quiz info as prop to change question? */}
                <button>
                  SELECTED
                </button>
              </div>
              {/* needs to be changed with props. */}

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {

}

//mapActionToProps????????????????????

export default connect(mapStateToProps)(Quiz);
