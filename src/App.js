import  {Home}  from "./routes/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import {Shop} from "./routes/shop/Shop";
import {Navigation}  from "./routes/navigation/Navigation";
import {Contact}  from "./routes/contact/Contact";
import {Authentication}  from "./routes/authentication/Authentication";

import "./App.scss";



export const App = () => {
  const links = [
    { path: "shop", text: "shop", element: <Shop />},
    { path: "contact" , text: "contact", element: <Contact />},
    { path: "auth", text: "sign in", element: <Authentication />},
    { path: "/", text: "home", element: <Home />},
  ];

  const routes = links.map((link, index) => {
    return <Route key={index} path={link.path} element={link.element} />
  })

  const navMenu = links.map((link, index) => {
    if (link.path !== "/") {
      return (
        <Link key={index} to={link.path} className="nav__link">
          <li>{link.text}</li>
        </Link>
      );
    }
    return false;
  });

  return (
    <Routes>
      <Route path="/" element={<Navigation navMenu={navMenu} />}>
        {routes}
      </Route>
    </Routes>
  );
};
