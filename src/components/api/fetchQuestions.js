import axios from "axios";
import config from "./config";

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

const fetchQuestions = async () => {
  // return await axios("http://localhost:8080/read");
  return await { data };
};

export default fetchQuestions;