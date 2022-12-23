import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "../../assets/images/crown.svg";
import "./Navigation.scss";

export const Navigation = ({links}) => {
    const navMenu = links.map((link, index) => {
        return <Link key={index} to={link.name} className="nav__link" ><li>{link.text}</li></Link>
    })

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">
                    <Logo className="logo"/>
                </Link>
                <nav>
                    <ul className="nav">
                        {navMenu}
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}