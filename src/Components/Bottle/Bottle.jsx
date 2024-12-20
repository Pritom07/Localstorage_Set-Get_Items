import PropTypes from 'prop-types';
import './Bottle.css'
import { useState } from 'react';

const Bottle = ({ bottle, settingCartItems }) => {
    const { name, price, ratings, img } = bottle;

    const [add, Setadd] = useState(false);
    const clicking = () => {
        Setadd(true);
    }
    const handlemultiple = () => {
        clicking();
        settingCartItems(bottle);
    }

    return (
        <div className='bottle'>
            <h3 className='bottle-name'>Name : {name}</h3>
            <h5>Price : {price} TAKA</h5>
            <h5>Ratings : {ratings}</h5>
            <img src={img} className='bottle-img' alt="Bottle-image" /><br />
            <button onClick={handlemultiple} className={(add) ? 'add-cart' : 'add_button'}>ADD_TO_CART</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    settingCartItems: PropTypes.func.isRequired
}

export default Bottle;