import Answer from "../Answer/Answer"
import AnswersContent from "../AnswerContent/AnswersContent"
import Button from "../Button/Button"
import FeedbackArea from "../FeedbackArea/FeedbackArea"
import SentenceCompleated from "../SentenceCompleted/SenteceCompited"
import SentenceExample from "../SentenceExample/SentenceExample"
import "./Card.css"

const Card = ({ sentenceExample, posibleAnswers, onClick }) => {
  return (
    <div className="card">
      <p className="instruction">Fill the missing word</p>
      <SentenceExample sentence={sentenceExample} />
      <SentenceCompleated />
      <AnswersContent>
        {posibleAnswers?.map((answer, index) => (
          <Answer key={index} answer={answer} />
        ))}
      </AnswersContent>
      <FeedbackArea>
        <Button onClick={onClick} />
      </FeedbackArea>
    </div>
  )
}
export default Card
