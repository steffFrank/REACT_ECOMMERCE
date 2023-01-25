import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../../Components/CategoriesPreview/CategoriesPreview";
import "./shop.scss";
import { Category } from "../category/category";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Shop = () => {
    const dispatch = useDispatch();

    // Get the categories at first page loading
useEffect(() => {
    const getCategories = async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
    }
    getCategories();
  }, [dispatch]);
  

    return (
        <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
        </Routes>
    )   
}