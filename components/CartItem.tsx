import { CollectionDataItemsType } from '../data/shop.data'
import Image from 'next/image'

interface CartItemProps {
    item: CollectionDataItemsType
}

const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="w-full flex mb-4 h-20">
            <Image width={'70%'} height={'100%'} src={imageUrl} alt="item" />
            <div className="w-3/4 flex flex-col items-start justify-center px-5 py-3">
                <span className="text-xl">{name}</span>
                <span className="text-xl">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
