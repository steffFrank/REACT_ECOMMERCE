import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "../../assets/images/crown.svg";
import "./Navigation.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";

export const Navigation = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <Logo className="logo" />
        </Link>
        <nav>
          <ul className="nav">
            <Link to="shop">
              <li className="nav__link">shop</li>
            </Link>
            <Link to="contact">
              <li className="nav__link" to="contact">contact</li>
            </Link>
            {
              currentUser ? (
                <Link><li className="nav__link" onClick={signOutUser}>sign out</li></Link>
              ) : (<Link to="auth"><li className="nav__link">sign in</li></Link>)
            }
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};