import axios from "axios";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const makeRequest = async (options, setError) => {
  try {
    return await axios({ ...defaultOptions, ...options });
  } catch (error) {
    setError && setError(error.message);
    return error;
  }
};

export default makeRequest;
