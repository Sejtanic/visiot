import { useQuiz } from "../../state/quizContext"
import "./FeedbackArea.css"
const FeedbackArea = ({ children }) => {
  const { correctAnswer, question } = useQuiz()

  if (correctAnswer === null) {
    return <div className="feedback-area">{children}</div>
  }

  if (correctAnswer === true) {
    return (
      <div className="feedback-area correct">
        <p>Good job</p>
        {children}
      </div>
    )
  }
  if (correctAnswer === false) {
    return (
      <div className="feedback-area false">
        <p>Answer : {question.correctAnswer}</p>
        {children}
      </div>
    )
  }
}
export default FeedbackArea
