import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../services/user';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.user.data);
  const isConnected = Boolean(userData);
  const signOption = isConnected ? "Sign out" : "Sign in";

  const handleClick = () => {
    if (!isConnected) {
      navigate('/login');
    } else {
      dispatch(logoutUser);
      navigate('/');
    }
  }

  return (
    <header role='navigation'>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <FontAwesomeIcon icon={faUserCircle} />
          {isConnected &&
            <Link className="main-nav-item" to="/profile">
              {userData?.firstName}
            </Link>
          }
          <button className="main-nav-item" onClick={handleClick}>
            {signOption}
          </button>
        </div>
      </nav>
    </header >
  )
}