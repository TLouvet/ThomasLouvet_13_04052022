import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './AuthenticationPage.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../utils/selector";
import { loginUser } from "../../services/auth";

export const AuthenticationPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isConnected } = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: e.target[0].value, password: e.target[1].value, rememberMe: e.target[2].checked }));
  }

  // Check if user is already connected -- then a redirection should happen
  useEffect(() => {
    if (localStorage.getItem("token") || sessionStorage.getItem("token") || isConnected) {
      navigate('/profile');
    }
  }, [navigate, isConnected])

  return (
    <main className="bg-dark" >
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" size="lg" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type='submit' className="sign-in-button" value='Sign In' />
        </form>
      </section>
    </main >
  )
}