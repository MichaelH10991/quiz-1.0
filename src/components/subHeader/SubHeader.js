import { useState } from "react";
import { getLanguages, getCategories } from "../utils/utils";

import "./subheader.css";

const SubHeader = ({ setSelectedLanguage, setSelectedCategory, data }) => {
  const [language, setLanguage] = useState(undefined);

  const languages = getLanguages(data);
  const categories = (language) => getCategories(data, language);

  const handleLanguageChange = (event) => {
    console.log("language set ", event.target.value);
    setLanguage(event.target.value);
    setSelectedLanguage(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log("category set ", event.target.value);
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
