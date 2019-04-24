//import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_URL + process.env.REACT_APP_DF_USER + "/session";
const sessionToken = "session_token";
const userInfoToken = "jwt";

export async function login(email, password) {
  const params = {'email': email, 'password': password};
  const { data: jwt } = await http.post(apiEndpoint, params);
  localStorage.setItem(sessionToken, jwt.session_token);
  localStorage.setItem(userInfoToken, JSON.stringify(jwt));
  http.setJwt(jwt.session_token);
}
export function getJwt() {

    try {
        return localStorage.getItem(sessionToken);
    }
    catch (e) { return "";}

}

