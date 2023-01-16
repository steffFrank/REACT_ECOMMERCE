import  {Home}  from "./routes/home/Home";
import { Routes, Route} from "react-router-dom";
import {Shop} from "./routes/shop/Shop";
import {Navigation}  from "./routes/navigation/Navigation";
import {Contact}  from "./routes/contact/Contact";
import {Authentication}  from "./routes/authentication/Authentication";
import "./App.scss";
import { Checkout } from "./routes/checkout/Checkout";
import { Category } from "./routes/category/category";

export const App = () => {
  const links = [
    { path: "shop/*", text: "shop", element: <Shop />},
    { path: "contact" , text: "contact", element: <Contact />},
    { path: "auth", text: "sign in", element: <Authentication />},
    { path: "/", text: "home", element: <Home />},
    { path: "checkout", text: "checkout", element: <Checkout />},
  ];

  const routes = links.map((link, index) => {
    return <Route key={index} path={link.path} element={link.element} />
  })

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {routes}
      </Route>
    </Routes>
  );
};