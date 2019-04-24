import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }

  return Promise.reject(error);
});

function setJwt(sessionToken) {

  if(sessionToken) {
      axios.defaults.headers.common["X-DreamFactory-Session-Token"] = sessionToken;
  }
  else {
      axios.defaults.headers.common["X-DreamFactory-Session-Token"] = "";
  }
  axios.defaults.headers.common["X-DreamFactory-Api-Key"] = process.env.REACT_APP_API_TOKEN;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
