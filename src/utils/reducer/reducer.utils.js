export const createAction = (type, payload) => {
    return {type, payload}
}


export const helperRemoveItem = (products, product) => {
    const newCartItems = products.filter(item => item.id !== product.id);
    return newCartItems
}

export const addProduct = (cartItems, product) => {
    const existingProduct = cartItems.find(item => product.id === item.id);
    if (existingProduct) {
        return cartItems.map(item => 
            item.id === product.id ? {...item, qty: item.qty + 1} :  item
        )
    }
    return [...cartItems, {...product, qty: 1}];
}

export const removeProduct = (cartItems, product) => {
    const existingProduct = cartItems.find(item => product.id === item.id);

    if (existingProduct.qty === 1) {
        return cartItems.filter(item => item.id !== existingProduct.id);
    }
    if (existingProduct) {
        return cartItems.map(item => 
            item.id === product.id ? {...item, qty: item.qty - 1} :  item
        )
    }
}