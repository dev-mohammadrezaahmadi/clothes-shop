import CustomButton from './CustomButton'
import styles from '../styles/CartDropdown.module.scss'
import { useAppSelector } from '../redux/hooks'
import { selectCartItems } from '../redux/slices/cart.reducer'
import CartItem from './CartItem'

const CartDropdowon = () => {
    const cartItems = useAppSelector(selectCartItems)
    return (
        <div className={styles.cart_dropdown}>
            <div className={styles.cart_items}>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className={styles.empty_message}>Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdowon
