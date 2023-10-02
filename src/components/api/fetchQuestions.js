import config from "./config";
import makeRequest from "./makeRequest";

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
      {
        _id: "64fb63de00168104841782b9",
        id: "3f2e80cc-e98c-5c2f-bd17-aca5194207c9",
        language: "Croatian",
        group: "Numbers",
        local: "Two",
        foreign: "Dva",
        foreignDisplay: "",
        __v: 0,
      },
    ],
  },
};

const fetchQuestions = async (setError) => {
  console.log(config);
  return await makeRequest(
    {
      method: "get",
      url: `${config.apiBaseUrl}/read`,
    },
    setError
  );
};

export default fetchQuestions;
