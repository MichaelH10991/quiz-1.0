import { useCallback, useEffect, useState } from "react";
import "./main.css";
import RightPane from "./rightPane/RightPane";
import QuestionText from "./QuestionText";
import { getQuestions, randomQuestion } from "../utils/utils";

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

const getNewQuestion = (
  answerCorrect,
  questions,
  question,
  setQuestion,
  options
) => {
  if (answerCorrect) {
    return randomQuestion(questions);
  }
  return question;
};

const Feedback = ({}) => {};

const Main = ({
  options,
  setOptions,
  selectedLanguage,
  selectedCategory,
  data,
  setShowFeedback,
  setAnswerCorrect,
  setPrevQuestion,
}) => {
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState({});
  const [question, setQuestion] = useState({});

  useEffect(() => {
    const questions = getQuestions(data, selectedLanguage, selectedCategory);
    const question = randomQuestion(questions);
    setQuestions(questions);
    setQuestion(question);
  }, [data, selectedLanguage, selectedCategory]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      // check if the answer is correct
      const answerCorrect = isAnswerCorrect(answer, question, options);
      setAnswerCorrect(answerCorrect);
      setShowFeedback(true);
      // mark the questions, only in challenge mode, this is for user feedback
      if (options.challenge.enabled) {
        setQuestions((prevQuestions) =>
          markQuestion(answerCorrect, question, prevQuestions)
        );
        // markQuestion(answerCorrect, question, setQuestions);
      }
      console.log(questions);
      // get a new question
      const newQuestion = getNewQuestion(answerCorrect, questions, question);

      setQuestion(newQuestion);
      event.target.value = "";
      setAnswer("");
    }
  };

  return (
    <div class="main-grid">
      <div class="main-content">
        <div class="question">
          <QuestionText
            question={question}
            selectedLanguage={selectedLanguage}
            selectedCategory={selectedCategory}
            options={options}
          />
        </div>
        <div class="answer-container">
          <div class="answer-bar">
            <input
              type="text"
              class="answer-input-1"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              placeholder="Give it a go!"
              onInput={handleInputChange}
              onKeyDown={handleSubmit}
            ></input>
            <button class="answer-button">GO</button>
          </div>
          <div class="help-buttons">
            <button class="help-button">Peek</button>
            <button class="help-button">Skip</button>
          </div>
        </div>
      </div>
      <RightPane options={options} setOptions={setOptions} />
    </div>
  );
};

export default Main;
