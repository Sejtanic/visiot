import "./ProgressBar.css"

const ProgressBar = ({ quizData }) => {
  const data = quizData
  const max = data?.length
  const value = data?.filter((question) => question.compleated === true).length
  return <progress value={value} max={max} className="progress-bar"></progress>
}
export default ProgressBar
