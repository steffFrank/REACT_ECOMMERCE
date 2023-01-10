import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "../../assets/images/crown.svg";
import "./Navigation.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export const Navigation = ({ navMenu }) => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <Logo className="logo" />
        </Link>
        <nav>
          <ul className="nav">{navMenu}</ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};