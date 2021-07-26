import styles from '../styles/CartItem.module.scss'
import { ShopDataItemsType } from '../data/shop.data'
import Image from 'next/image'

interface CartItemProps {
    item: ShopDataItemsType
}

const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className={styles.cart_item}>
            <Image width={'70%'} height={'100%'} src={imageUrl} alt="item" />
            <div className={styles.item_details}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
