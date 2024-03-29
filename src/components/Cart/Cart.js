import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const CartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose = {props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    );
};

export default Cart;
