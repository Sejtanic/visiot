import { useQuiz } from "../../state/quizContext"
import "./Answer.css"

const Answer = ({ answer, style }) => {
  const { submitAnswer } = useQuiz()
  const onClickHandler = (e) => {
    submitAnswer(e.target.innerHTML)
  }
  return (
    <button style={style} className="answer" onClick={onClickHandler}>
      {answer}
    </button>
  )
}
export default Answer
