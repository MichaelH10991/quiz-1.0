import { useState } from "react";

import "./subheader.css";

const getLanguages = (data) => (data && Object.keys(data)) || [];
const getCategories = (data, language) =>
  (data && language && data[language] && Object.keys(data[language])) || [];

const SubHeader = ({ setSelectedLanguage, setSelectedCategory, data }) => {
  const [language, setLanguage] = useState(undefined);

  const languages = getLanguages(data);
  const categories = (language) => getCategories(data, language);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setSelectedLanguage(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div class="subheader-container">
      <div class="subheader">
        <div class="selectors">
          <select onChange={handleLanguageChange} class="selector">
            <option value="">Language</option>
            {languages.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select>
          <select onChange={handleCategoryChange} class="selector">
            <option value="">Category</option>
            {language &&
              categories(language).map((language) => (
                <option value={language}>{language}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
