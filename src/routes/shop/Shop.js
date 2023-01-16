import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../../Components/CategoriesPreview/CategoriesPreview";
import "./shop.scss";
import { Category } from "../category/category";

export const Shop = () => {

    return (
        <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
        </Routes>
    )   
}