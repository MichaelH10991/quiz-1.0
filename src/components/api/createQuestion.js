import config from "./config";
import makeRequest from "./makeRequest";

const createQuestion = async (data, setError) => {
  return await makeRequest(
    {
      method: "post",
      url: `${config.apiBaseUrl}/create`,
      data,
    },
    setError
  );
};

export default createQuestion;
