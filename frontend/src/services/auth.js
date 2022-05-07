import { selectAuth } from "../utils/selector";
import { setConnectionState } from "../features/user";
import { fetching, resolved, rejected } from "../features/auth";

export function loginUser(updatedData) {

  return async (dispatch, getState) => {
    const auth = selectAuth(getState());
    if (auth.status === "pending") {
      return;
    }
    dispatch(fetching());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
        method: 'POST',
        body: JSON.stringify({ email: updatedData.email, password: updatedData.password }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json();
      if (data.status === 200) {
        dispatch(resolved());
        dispatch(setConnectionState(true));
        updatedData.rememberMe ? localStorage.setItem("token", data.body.token) : sessionStorage.setItem('token', data.body.token);
      } else {
        dispatch(rejected());
      }
    } catch (error) {
      dispatch(rejected());
    }
  }
}