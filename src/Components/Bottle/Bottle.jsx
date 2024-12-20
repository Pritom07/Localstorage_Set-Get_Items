import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({ bottle }) => {
    const { name, price, ratings, img } = bottle;

    return (
        <div className='bottle'>
            <h3 className='bottle-name'>Name : {name}</h3>
            <h5>Price : {price} TAKA</h5>
            <h5>Ratings : {ratings}</h5>
            <img src={img} className='bottle-img' alt="Bottle-image" />
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired
}

export default Bottle;