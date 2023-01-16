import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const categoriesContext = createContext({
    categoriesMap: {},
});


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, []);

    return <categoriesContext.Provider value={{categoriesMap}}>{children}</categoriesContext.Provider>
}