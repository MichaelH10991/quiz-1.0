import "./revise.css";

const incorrect = {
  color: "red",
};

const correct = {
  color: "green",
};

const done = {
  textDecoration: "line-through",
};

const setStyle = (question) => {
  if (question.done && question.incorrect) {
    return { ...done, ...incorrect };
  } else if (question.done) {
    return { ...done, ...correct };
  }
  return {};
};

const Revise = ({ questions, language, options }) => {
  if (!options.revise.enabled) {
    return undefined;
  }

  return (
    <div class="main-grid">
      <div class="main-content">
        <p class="revise-header">Revise</p>
        {language && (
          <div class="revision-container">
            <div class="revision-item-header">English</div>
            <div class="revision-item-header">{language}</div>
          </div>
        )}
        {questions &&
          Array.isArray(questions) &&
          questions.map((question) => {
            return (
              <div class="revision-container">
                <div class="revision-item">{question.local}</div>
                <div style={setStyle(question)} class="revision-item">
                  {question.foreignDisplay || question.foreign}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Revise;
