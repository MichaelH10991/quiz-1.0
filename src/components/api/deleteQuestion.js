import config from "./config";
import makeRequest from "./makeRequest";

const deleteQuestion = async (id, setError) => {
  return await makeRequest(
    {
      method: "delete",
      url: `${config.apiBaseUrl}/delete/${id}`,
    },
    setError
  );
};

export default deleteQuestion;
