/**
 * Gets all of the languages as an array of strings
 * @param {*} data the quiz data from the backend
 * @returns an array of languages
 */
const getLanguages = (data) => (data && Object.keys(data)) || [];

/**
 * Gets all of the categories for a specific language
 * @param {*} data the quiz data from the backend
 * @param {*} language the language to get categories for
 * @returns an array of categories
 */
const getCategories = (data, language) =>
  (data && language && data[language] && Object.keys(data[language])) || [];

/**
 *
 * @param {*} questions
 * @param {*} language
 * @param {*} category
 * @returns
 */
const getQuestions = (questions, language, category) => {
  if ((questions, language, category)) {
    return questions[language][category];
  }
  return [];
};

/**
 *
 * @param {*} questions
 * @returns
 */
const getQuestion = (questions) => (questions && questions[0]) || undefined;

/**
 * Provides a random number between two ranges.
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

/**
 *
 * @param {*} questions
 * @returns
 */
const questionsLeft = (questions) => {
  return questions && questions.filter((question) => !question.done);
};

/**
 *
 * @param {*} answer
 * @param {*} question
 * @param {*} options
 * @returns
 */
const isAnswerCorrect = (answer, question, options) => {
  if (options.flip.enabled) {
    if (answer.toLowerCase().trim() === question.local.toLowerCase().trim()) {
      console.log("Correct!");
      return true;
    }
    console.log("incorrect");
    return false;
  }

  if (answer.toLowerCase().trim() === question.foreign.toLowerCase().trim()) {
    console.log("Correct!");
    return true;
  }
  console.log("incorrect");
  return false;
};

/**
 * Marks the question answered, done does not necesessarily mean it was answered correctly
 * maybe move the hook back in here? I dont know :(
 * @param {*} answerCorrect
 * @param {*} question
 * @param {*} questions
 * @returns
 */
const markQuestion = (answerCorrect, question, questions) => {
  if (answerCorrect === true) {
    // if correct, it is simply marked as done
    return questions.map((prevQuestion) => {
      if (prevQuestion.id === question.id) {
        return {
          ...prevQuestion,
          done: true,
        };
      }
      return prevQuestion;
    });
  } else {
    // set as incorrectly answered
    return questions.map((prevQuestion) => {
      if (prevQuestion.id === question.id) {
        return {
          ...prevQuestion,
          incorrect: true,
        };
      }
      return prevQuestion;
    });
  }
};

export {
  getLanguages,
  getCategories,
  getQuestions,
  getQuestion,
  randomQuestion,
  questionsLeft,
  isAnswerCorrect,
  markQuestion,
};
