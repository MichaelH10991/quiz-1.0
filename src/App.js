import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SubHeader from "./components/subHeader/SubHeader";
import MainContent from "./components/main/Main";
import { Feedback } from "./components/common/";

import generalData from "./components/generalData";

import fetchQuestions from "./components/api/fetchQuestions";

function App() {
  const [options, setOptions] = useState(generalData.options);
  const [data, setData] = useState(undefined);
  const [selectedLanguage, setSelectedLanguage] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  const [showFeedback, setShowFeedback] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [prevQuestion, setPrevQuestion] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchQuestions(setError);
      setData(response.data);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <Header options={options} setOptions={setOptions} />
      <SubHeader
        setSelectedLanguage={setSelectedLanguage}
        setSelectedCategory={setSelectedCategory}
        data={data}
      />
      <MainContent
        options={options}
        setOptions={setOptions}
        selectedLanguage={selectedLanguage}
        selectedCategory={selectedCategory}
        data={data}
        setShowFeedback={setShowFeedback}
        setAnswerCorrect={setAnswerCorrect}
        setPrevQuestion={setPrevQuestion}
        error={error}
      />
      <Feedback
        setShowFeedback={setShowFeedback}
        showFeedback={showFeedback}
        answerCorrect={answerCorrect}
        prevQuestion={prevQuestion}
        language={selectedLanguage}
      />
    </div>
  );
}

export default App;
