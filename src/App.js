import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import  {Home}  from "./routes/home/Home";
import { Routes, Route} from "react-router-dom";
import {Shop} from "./routes/shop/Shop";
import {Navigation}  from "./routes/navigation/Navigation";
import {Contact}  from "./routes/contact/Contact";
import {Authentication}  from "./routes/authentication/Authentication";
import "./App.scss";
import { Checkout } from "./routes/checkout/Checkout";
import { setCurrentUser } from "./store/user/user.action";
import { setCategoriesMap } from "./store/categories/category.action";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
},[dispatch]);

// Get the categories at first page loading
useEffect(() => {
  const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categories));
  }
  getCategoriesMap();
}, [dispatch]);


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