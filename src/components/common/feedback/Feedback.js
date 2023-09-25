import "./feedback.css";
import ListenButton from "../listenButton/ListenButton";

const FeedbackComponent = () => {
  return (
    <>
      <div></div>
    </>
  );
};

const Feedback = ({
  setShowFeedback,
  showFeedback,
  answerCorrect,
  prevQuestion,
  language,
}) => {
  if (!showFeedback) {
    return undefined;
  }

  return answerCorrect === true ? (
    <div class="feedback-container feedback-correct">
      <p>Correct!</p>
      <button class="exit-button" onClick={() => setShowFeedback(false)}>
        close
      </button>
      <ListenButton language={language} phrase={prevQuestion.foreign} />
    </div>
  ) : (
    <div class="feedback-container feedback-incorrect">
      <p>incorrect</p>
      <button class="exit-button" onClick={() => setShowFeedback(false)}>
        close
      </button>
    </div>
  );
};

export default Feedback;
