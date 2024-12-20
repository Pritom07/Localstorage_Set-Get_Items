import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import Cart from "../Cart/Cart";
import { addItem } from "../../Localstorage_Manage/Localstorage";

const Bottles = () => {
    const [bottles, Setbottles] = useState([]);
    const [cartItems, setcartitems] = useState([]);

    useEffect(() => {
        fetch('../public/bottles.json')
            .then(res => res.json())
            .then(data => Setbottles(data))
    }, [])

    const settingCartItems = (bottle) => {
        const newcartItems = [...cartItems, bottle];
        setcartitems(newcartItems);
        addItem(bottle.id);
    }

    return (
        <div>
            <Cart cartItems={cartItems}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} settingCartItems={settingCartItems}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;