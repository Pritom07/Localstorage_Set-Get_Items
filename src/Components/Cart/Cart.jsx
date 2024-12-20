import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h3>Cart Added Items : {cartItems.length}</h3>
            <div className='added-bottle'>
                {
                    cartItems.map((bottle) => <div key={bottle.id} style={{ border: '2px solid green', borderRadius: '6px', padding: '8px' }}>
                        <img src={bottle.img} className='cart-img'></img><br />
                        <button style={{ border: '1px solid red', borderRadius: '8px', margin: '10px', fontWeight: 650, color: 'black', backgroundColor: 'red' }}>REMOVE</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
}
export default Cart;