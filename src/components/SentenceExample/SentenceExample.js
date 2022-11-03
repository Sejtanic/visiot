import { useQuiz } from "../../state/quizContext"
import "./SentenceExample.css"
const SentenceExample = ({ sentence }) => {
  return <p className="sentence-example">{sentence}</p>
}
export default SentenceExample
