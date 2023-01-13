import { createContext, useState, useEffect } from "react";
// import { onAuthStateChangedListener } from "../utils/firebase/firebase";

import PRODUCTS from "../shop-data.json";


export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener(product => {
    //         setProducts(product);
    //     });
    //     return unsubscribe;
    // });

    return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
}