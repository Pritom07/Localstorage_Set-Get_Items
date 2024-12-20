const getLocalstorageItem = () => {
    const item = localStorage.getItem('cart');
    if (item) {
        const parsified = JSON.parse(item);
        return parsified;
    }
    return [];
}

const setItem = (cart) => {
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}

const addItem = (id) => {
    const cart = getLocalstorageItem();
    if (cart) {
        cart.push(id);
    }
    setItem(cart);
}

export { addItem }