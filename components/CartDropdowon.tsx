import CustomButton from './CustomButton'
import styles from '../styles/CartDropdown.module.scss'
import { useAppSelector } from '../redux/hooks'
import { selectCartItems } from '../redux/slices/cart.reducer'
import CartItem from './CartItem'
import { useRouter } from 'next/router'
import { toggleCartHidden } from '../redux/slices/cart.reducer'
import { useAppDispatch } from '../redux/hooks'

const CartDropdowon = () => {
    const cartItems = useAppSelector(selectCartItems)
    const dispatch = useAppDispatch()
    const { push } = useRouter()
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
            <CustomButton onClick={() => {
                push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdowon
