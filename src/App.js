import { Home } from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./routes/shop/Shop";
import { Navigation } from "./routes/navigation/Navigation";
import "./App.scss";
import { Contact } from "./routes/contact/Contact";
import { Signin } from "./routes/signin/Signin";

const App = () => {
  const links = [
    { name: "shop", text: "shop" },
    { name: "contact" , text: "contact"},
    { name: "signin", text: "signin" },
  ];
  return (
    <Routes>
      <Route path="/" element={<Navigation links={links} />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
