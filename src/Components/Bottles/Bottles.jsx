import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import Cart from "../Cart/Cart";
import { addItem, getLocalstorageItem, removeItem } from "../../Localstorage_Manage/Localstorage";

const Bottles = () => {
    const [bottles, Setbottles] = useState([]);
    const [cartItems, setcartitems] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => Setbottles(data))
    }, [])

    const settingCartItems = (bottle) => {
        const newcartItems = [...cartItems, bottle];
        setcartitems(newcartItems);
        addItem(bottle.id);
    }

    const removecartitems = (idx) => {
        const res = cartItems.filter(bottle => bottle.id !== idx);
        setcartitems(res);
        removeItem(idx);
    }

    useEffect(() => {
        if (bottles.length > 0) {
            const currentcartitems = getLocalstorageItem();
            const newarray = [];
            for (const id of currentcartitems) {
                const newacrt = bottles.find(bottle => bottle.id === id);
                if (newacrt) {
                    newarray.push(newacrt);
                }
            }
            setcartitems(newarray);
        }
    }, [bottles])

    return (
        <div>
            <Cart cartItems={cartItems} removecartitems={removecartitems}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} settingCartItems={settingCartItems}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;