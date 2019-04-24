import http from './httpService';

const apiEndpoint = process.env.REACT_APP_URL + process.env.REACT_APP_DF_USER + "/session";
const sessionToken = "session_token";
const userInfoToken = "jwt";

http.setJwt(getJwt());

export async function login(email, password) {

  const params = {'email': email, 'password': password};
  const { data: jwt } = await http.post(apiEndpoint, params);
  localStorage.setItem(sessionToken, jwt.session_token);
  localStorage.setItem(userInfoToken, JSON.stringify(jwt));
  http.setJwt(jwt.session_token);

}

export function loginWithJwt(jwt) {
  localStorage.setItem(sessionToken, jwt);
}

export function logout() {
  localStorage.removeItem(sessionToken);
}

export function getCurrentUser() {
  try {
    debugger;
    const jwt = localStorage.getItem(userInfoToken);
    if(jwt)
      return JSON.parse(jwt);
    else
      return false;
  } catch (ex) {
    return false;
  }
}

export function getJwt() {

    try {
        return localStorage.getItem(sessionToken);
    }
    catch (e) { return "";}

}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
