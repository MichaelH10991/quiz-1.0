const QuestionText = ({
  question,
  selectedLanguage,
  selectedCategory,
  options,
}) => {
  if (!selectedLanguage) {
    return "Please select a language.";
  }

  if (!selectedCategory) {
    return "Please select a category.";
  }

  if (!question) {
    return "Question loading...";
  }

  if (options.flip.enabled) {
    if (options.peek.enabled) {
      // could make the peeked text green and the oher text light grey
      return question.local;
    }
    return `What is ${question.foreign} in English`;
  }
  if (options.peek.enabled) {
    return question.foreign;
  }
  return `What is ${question.local} in ${selectedLanguage}`;
};

export default QuestionText;