import axios from "axios";

const signup = async () => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/users/signup",
    headers: {},
  };

  const response = await axios.request(config);
  return response;
};

export default signup;
