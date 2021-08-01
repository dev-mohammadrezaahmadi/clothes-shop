import { CollectionDataItemsType } from '../data/shop.data'
import Image from 'next/image'
import { addItem, removeItem, clearItemFromCart } from '../redux/slices/cart.reducer'
import { useAppDispatch } from '../redux/hooks'

interface CheckoutItemProps {
    cartItem: CollectionDataItemsType
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useAppDispatch()
    return (
        <div className="w-full flex border-b-2 border-gray-300 py-4 items-center">
            <div className="w-1/4 pr-3 mt-2">
                <Image src={imageUrl} className="rounded-full" alt="item" width="100%" height="100%" />
            </div>
            <span className="w-1/4 text-xs sm:text-xl lg:text-2xl">{name}</span>
            <span className="w-1/4 flex px-8">
                <div className="cursor-pointer" onClick={() => dispatch(removeItem(cartItem))}>
                    &#10094;
                </div>
                <span className="mx-2">{quantity}</span>
                <div className="cursor-pointer" onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className="w-1/4 sm:text-xl lg:text-2xl">{price}$</span>
            <div className="cursor-pointer mr-3" onClick={() => dispatch(clearItemFromCart(cartItem))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
