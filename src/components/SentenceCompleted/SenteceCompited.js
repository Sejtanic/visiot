import Answer from "../Answer/Answer"
import { useQuiz } from "../../state/quizContext"
import "./SentenceCompleated.css"
const SentenceCompleated = () => {
  const { question, activated, correctAnswer } = useQuiz()
  const sentence = question?.sentenceCompleat?.split("__")
  if (!sentence) return
  return (
    <div className="compleated-style">
      <p>{sentence[0]}</p>
      {activated ? (
        <Answer
          style={{ background: correctAnswer ? "#2edfe8" : "#fc7986" }}
          answer={activated}
        />
      ) : (
        "........"
      )}
      <p>{sentence[1]}</p>
    </div>
  )
}
export default SentenceCompleated
