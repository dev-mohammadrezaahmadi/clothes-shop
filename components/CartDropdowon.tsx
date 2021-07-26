import CustomButton from './CustomButton'
import styles from '../styles/CartDropdown.module.scss'

const CartDropdowon = () => {
    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items} />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdowon
