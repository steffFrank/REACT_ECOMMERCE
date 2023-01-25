import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "../../assets/images/crown.svg";
import "./Navigation.scss";
import { useContext } from "react";
// import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartIcon } from "../../Components/CartIcon/CartIcon";
import { CartDropdown } from "../../Components/CartDropdown/CartDropdown";
import { CartDropdownContext } from "../../contexts/cart-dropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartDropdownOpen } from "../../store/cart-dropdown/cart-dropdown.selector";
export const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
 
  const  isCartDropdownOpen  = useSelector(selectIsCartDropdownOpen);

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
            <CartIcon />
          </ul>
        </nav>
        {isCartDropdownOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};