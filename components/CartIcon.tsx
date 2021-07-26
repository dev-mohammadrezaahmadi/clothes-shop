import Image from 'next/image'
import styles from '../styles/CartIcon.module.scss'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleCartHidden, selectCartItemsCount } from '../redux/slices/cart.reducer'

const CartIcon = () => {
    const dispatch = useAppDispatch()
    const cartItemsCount = useAppSelector(selectCartItemsCount)
    return (
        <div className={styles.cart_icon} onClick={() => dispatch(toggleCartHidden())}>
            <Image src='/shopping-bag.svg' width={24} height={24} className={styles.shopping_icon} alt="shopping-bag-icon" />
            <span className={styles.item_count}>{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon
