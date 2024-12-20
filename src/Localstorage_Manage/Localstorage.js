const getLocalstorageItem = () => {
    const item = localStorage.getItem('cart');
    if (item) {
        const parsified = JSON.parse(item);
        return parsified;
    }
    return [];
}

const addItem = (id) => {
    const cart = getLocalstorageItem();
    cart.push(id);
    setItem(cart);
}

const setItem = (cart) => {
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}

export { addItem }