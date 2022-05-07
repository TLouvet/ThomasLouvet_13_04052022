import { fetching, resolved, rejected, logout } from "../features/user";
import { selectUser } from "../utils/selector";

// Fetch one user
export async function fetchUser(dispatch, getState) {
  const status = selectUser(getState()).status;
  if (status === 'pending' || status === 'updating') {
    return;
  }
  dispatch(fetching())
  const token = (Boolean(localStorage.getItem("token")) ? localStorage.getItem("token") : sessionStorage.getItem("token"));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    if (data.status === 200) {
      dispatch(resolved(data.body));
    } else {
      dispatch(rejected(data.body));
    }
  } catch (error) {
    dispatch(rejected(error));
  }
}

export function updateUser(updatedData) {

  return async (dispatch, getState) => {
    const user = selectUser(getState());
    if (user.status === 'pending' || user.status === 'updating') {
      return;
    }
    dispatch(fetching())
    const token = (Boolean(localStorage.getItem("token")) ? localStorage.getItem("token") : sessionStorage.getItem("token"));
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
        method: "PUT",
        body: JSON.stringify({ firstName: updatedData.firstName, lastName: updatedData.lastName }),
        headers: {
          authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        dispatch(resolved(data.body));
      } else {
        dispatch(rejected(data.body));
      }
    } catch (error) {
      dispatch(rejected(error));
    }
  }
}


export function logoutUser(dispatch) {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
  }
  dispatch(logout());
}