import "./App.css"
import Card from "./components/Card/Card"
import ProgressBar from "./components/ProgressBar/ProgressBar"
import { useQuiz } from "./state/quizContext"
function App() {
  const { question, nextQuestionHandler, quizData } = useQuiz()

  const onClickHandler = () => {
    nextQuestionHandler()
  }
  return (
    <div className="App">
      <ProgressBar quizData={quizData} />
      <Card
        sentenceExample={question?.sentenceExample}
        posibleAnswers={question?.posibleAnswers}
        onClick={onClickHandler}
      />
    </div>
  )
}

export default App
