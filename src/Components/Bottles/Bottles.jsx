import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, Setbottles] = useState([]);

    useEffect(() => {
        fetch('../public/bottles.json')
            .then(res => res.json())
            .then(data => Setbottles(data))
    }, [])
    return (
        <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;