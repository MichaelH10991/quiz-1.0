import "./feedback.css";

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
}) => {
  if (!showFeedback) {
    return undefined;
  }

  return answerCorrect === true ? (
    <div class="feedback-container feedback-correct">
      <p>Correct!</p>
      <button onClick={() => setShowFeedback(false)}>close</button>
      <button>listen</button>
    </div>
  ) : (
    <div class="feedback-container feedback-incorrect">
      <p>incorrect</p>
      <button onClick={() => setShowFeedback(false)}>close</button>
    </div>
  );
};

export default Feedback;
