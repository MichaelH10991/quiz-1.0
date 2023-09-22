import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SubHeader from "./components/subHeader/SubHeader";
import MainContent from "./components/main/Main";
import generalData from "./components/generalData";

const data = {
  Croatian: {
    Numbers: [
      {
        _id: "64fb63de00168104841782b8",
        id: "3f2e80cc-e98c-5c2f-bd17-aca5194207c8",
        language: "Croatian",
        group: "Numbers",
        local: "One",
        foreign: "Jedan",
        foreignDisplay: "",
        __v: 0,
      },
    ],
  },
};

function App() {
  const [options, setOptions] = useState(generalData.options);
  const [selectedLanguage, setSelectedLanguage] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  return (
    <div className="App">
      <Header options={options} setOptions={setOptions} />
      <SubHeader
        setSelectedLanguage={setSelectedLanguage}
        setSelectedCategory={setSelectedCategory}
        data={data}
      />
      <MainContent options={options} setOptions={setOptions} />
    </div>
  );
}

export default App;
