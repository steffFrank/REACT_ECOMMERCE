import { Home } from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import { Shop } from "./routes/shop/Shop";
import { Navigation } from "./routes/navigation/Navigation";
import "./App.scss";

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
      </Route>
    </Routes>
  );
};

export default App;
