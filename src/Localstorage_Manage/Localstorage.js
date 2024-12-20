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

const removeItem = (id) => {
    const cart = getLocalstorageItem();
    const updatedcart = cart.filter(idx => idx !== id);
    setItem(updatedcart);
}

export { addItem, removeItem, getLocalstorageItem }