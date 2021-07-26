import styles from '../styles/CheckoutItem.module.scss'
import { ShopDataItemsType } from '../data/shop.data'
import Image from 'next/image'
import { addItem, removeItem, clearItemFromCart } from '../redux/slices/cart.reducer'
import { useAppDispatch } from '../redux/hooks'

interface CheckoutItemProps {
    cartItem: ShopDataItemsType
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useAppDispatch()
    return (
        <div className={styles.checkout_item}>
            <div className={styles.image_container}>
                <Image src={imageUrl} alt="item" width="100%" height="100%" />
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.quantity}>
                <div className={styles.arrow} onClick={() => dispatch(removeItem(cartItem))}>
                    &#10094;
                </div>
                <span className={styles.value}>{quantity}</span>
                <div className={styles.arrow} onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className={styles.price}>{price}$</span>
            <div className={styles.remove_button} onClick={() => dispatch(clearItemFromCart(cartItem))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
