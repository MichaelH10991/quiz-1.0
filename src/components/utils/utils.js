const getLanguages = (data) => (data && Object.keys(data)) || [];
const getCategories = (data, language) =>
  (data && language && data[language] && Object.keys(data[language])) || [];

const getQuestions = (questions, language, category) => {
  if ((questions, language, category)) {
    return questions[language][category];
  }
  return [];
};

const getQuestion = (questions) => (questions && questions[0]) || undefined;

/**
 * Provides a random number between to ranges.
 * @param {*} min
 * @param {*} max
 * @returns Number
 */
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Returns a random question from the provided list.
 * @param {*} questions
 * @returns phrase object
 */
const randomQuestion = (questions) => {
  if (questions) {
    const randomNumber = getRandom(0, questions.length - 1);
    return questions[randomNumber];
  }
  return undefined;
};

const questionsLeft = (questions) => {
  return questions && questions.filter((question) => !question.done);
};

export {
  getLanguages,
  getCategories,
  getQuestions,
  getQuestion,
  randomQuestion,
  questionsLeft,
};
