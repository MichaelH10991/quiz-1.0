const LIGHTER = "#4e5267";
const GREEN = "#2efe93";

const ErrorFeedback = ({ error }) => {
  return (
    <div class="error">
      <p>Uh oh :(</p>
      <p>There was an error loading the questions.</p>
      <p>Error: {error}</p>
      <p>Please try again later.</p>
    </div>
  );
};

const QuestionText = ({
  question,
  selectedLanguage,
  selectedCategory,
  options,
  error,
}) => {
  if (error) {
    return <ErrorFeedback error={error} />;
  }

  if (!selectedLanguage) {
    return "Select a language to get started...";
  }

  if (!selectedCategory) {
    return "Now select a category...";
  }

  if (!question) {
    return "Question loading...";
  }

  if (options.flip.enabled) {
    if (options.peek.enabled) {
      // could make the peeked text green and the oher text light grey
      return (
        <>
          <span style={{ color: LIGHTER }}>What is "</span>
          <span style={{ color: GREEN }}>{question.local}</span>
          <span style={{ color: LIGHTER }}>" in English</span>
        </>
      );
    }
    return `What is "${
      question.foreignDisplay || question.foreign
    }" in English`;
  }
  if (options.peek.enabled) {
    return (
      <>
        <span style={{ color: LIGHTER }}>What is "</span>
        <span style={{ color: GREEN }}>
          {question.foreignDisplay || question.foreign}
        </span>
        <span style={{ color: LIGHTER }}>" in {selectedLanguage}</span>
      </>
    );
  }
  return `What is "${question.local}" in ${selectedLanguage}`;
};

export default QuestionText;
