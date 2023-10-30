const QuestionText = ({
  question,
  selectedLanguage,
  selectedCategory,
  options,
  error,
}) => {
  if (error) {
    return (
      <div class="error">
        <p>Uh oh :(</p>
        <p>There was an error loading the questions.</p>
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
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
          <span style={{ color: "#4e5267" }}>What is "</span>
          <span style={{ color: "#2efe93" }}>{question.local}</span>
          <span style={{ color: "#4e5267" }}>" in English</span>
        </>
      );
    }
    return `What is "${question.foreign}" in English`;
  }
  if (options.peek.enabled) {
    return (
      <>
        <span style={{ color: "#4e5267" }}>What is "</span>
        <span style={{ color: "#2efe93" }}>{question.foreignDisplay}</span>
        <span style={{ color: "#4e5267" }}>" in {selectedLanguage}</span>
      </>
    );
  }
  return `What is "${question.local}" in ${selectedLanguage}`;
};

export default QuestionText;
