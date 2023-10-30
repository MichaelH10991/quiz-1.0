import { useEffect, useState } from "react";
import "./main.css";
import RightPane from "./rightPane/RightPane";
import QuestionText from "./QuestionText";
import Revise from "../revise/Revise";
import ManagementTable from "../management/ManagementTable";
import Answer from "./Answer";

import {
  getQuestions,
  randomQuestion,
  questionsLeft,
  isAnswerCorrect,
  markQuestion,
} from "../utils/utils";

const Main = ({
  options,
  setOptions,
  selectedLanguage,
  selectedCategory,
  data,
  setShowFeedback,
  setAnswerCorrect,
  setPrevQuestion,
  error,
}) => {
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
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
        const questionsMarkedAsDone = markQuestion(
          answerCorrect,
          question,
          questions
        );
        setQuestions(questionsMarkedAsDone);
        if (answerCorrect) {
          setQuestion(randomQuestion(questionsLeft(questionsMarkedAsDone)));
          setPrevQuestion(question);
        }
      } else {
        // get a new question
        if (answerCorrect) {
          const newQuestion = randomQuestion(questions);
          setPrevQuestion(question);
          setQuestion(newQuestion);
        }
      }
      event.target.value = "";
      setAnswer("");
    }
  };

  /**
   * Updates state when one of the buttons has been clicked.
   * @param {*} optionKey the key of the option
   * @returns
   */
  const handleOptionSelected = (optionKey) => () =>
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [optionKey]: {
          ...prevOptions[optionKey],
          enabled: !prevOptions[optionKey].enabled,
        },
      };
    });

  return (
    <>
      <div class="main-grid">
        <div class="main-content">
          <div class="content-box">
            <div class="questions-left">
              {questionsLeft(questions).length} questions left
            </div>
            <div class="question">
              <QuestionText
                question={question}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                options={options}
                error={error}
              />
            </div>
            <Answer
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />

            <div class="help-buttons">
              <button
                class="help-button"
                onMouseDown={handleOptionSelected("peek")}
                onMouseUp={handleOptionSelected("peek")}
                onTouchStart={handleOptionSelected("peek")}
                onTouchEnd={handleOptionSelected("peek")}
              >
                Peek
              </button>
              <button class="help-button">Skip</button>
            </div>
          </div>
          {options.revise.enabled && (
            <div class="content-box">
              <Revise
                questions={questions}
                language={selectedLanguage}
                options={options}
              />
            </div>
          )}
          {options.management.enabled && (
            <div class="content-box">
              <ManagementTable
                data={data}
                showTable={options.management.enabled}
              />
            </div>
          )}
        </div>
        <RightPane options={options} setOptions={setOptions} />
      </div>
    </>
  );
};

export default Main;
