import axios from "axios";

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

const login = async (email, password) => {
  let data = JSON.stringify({
    email,
    password,
  });
  await wait(3000);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios.request(config);
  return response;
};

export default login;
