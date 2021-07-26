import styles from '../styles/Checkout.module.scss'
import CheckoutItem from '../components/CheckoutItem'
import { useAppSelector } from '../redux/hooks'
import { selectCartItems, selectCartItemsPriceTotal } from '../redux/slices/cart.reducer'

const CheckoutPage = () => {
    const cartItems = useAppSelector(selectCartItems)
    const total = useAppSelector(selectCartItemsPriceTotal)
    return (
        <div className={styles.checkout_page}>
            <div className={styles.checkout_header}>
                <div className={styles.header_block}>
                    <span>Product</span>
                </div>
                <div className={styles.header_block}>
                    <span>Description</span>
                </div>
                <div className={styles.header_block}>
                    <span>Quantity</span>
                </div>
                <div className={styles.header_block}>
                    <span>Price</span>
                </div>
                <div className={styles.header_block}>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className={styles.total}>TOTAL: ${total}</div>
        </div>
    )
}

export default CheckoutPage
