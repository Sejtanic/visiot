import React, { useContext, useEffect, useState } from "react"
import { getData } from "../utils/api/api"

const QuizContext = React.createContext()
export const useQuiz = () => {
  return useContext(QuizContext)
}

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null)
  const [currentQuestion, setQuestion] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [activated, setActivated] = useState("")

  useEffect(() => {
    getData().then((data) => {
      setQuizData(data)
      setQuestion(data?.find((question) => question.compleated === false))
    })
  }, [])

  const submitAnswer = (props) => {
    if (activated) return
    if (props === currentQuestion.correctAnswer) {
      setQuizData((prev) =>
        [
          ...prev,
          (prev.find(
            (question) => question.id === currentQuestion.id
          ).compleated = true),
        ].filter((element) => element !== true)
      )

      setCorrectAnswer(true)
    } else {
      setCorrectAnswer(false)
    }

    setQuizData((prev) =>
      [
        ...prev,
        (prev.find(
          (question) => question.id === currentQuestion.id
        ).answered = true),
      ].filter((element) => element !== true)
    )

    setActivated(props)
  }

  const nextQuestionHandler = () => {
    if (quizData.filter((question) => !question.compleated).length === 0) {
      alert("Congratulations! Game over")
    }
    setActivated("")
    setCorrectAnswer(null)
    setQuestion(
      quizData.find((question) => question.answered === false)
        ? quizData.find((question) => question.answered === false)
        : quizData.find((question) => question.compleated === false)
    )
  }

  const value = {
    correctAnswer,
    question: currentQuestion,
    submitAnswer,
    nextQuestionHandler,
    activated,
    quizData,
  }
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
