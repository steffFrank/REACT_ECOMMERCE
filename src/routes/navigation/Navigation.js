import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">
                    <div>Logo</div>
                </Link>
                <nav className="nav">
                    <Link to="/shop" className="nav__link">
                        Shop
                    </Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}