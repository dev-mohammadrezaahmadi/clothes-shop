import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleCartHidden, selectCartItemsCount } from '../redux/slices/cart.reducer'

const CartIcon = () => {
    const dispatch = useAppDispatch()
    const cartItemsCount = useAppSelector(selectCartItemsCount)
    return (
        <div className="flex md:w-9 md:h-9 w-6 h-6 relative justify-center ml-4 items-center cursor-pointer" onClick={() => dispatch(toggleCartHidden())}>
            <Image src='/shopping-bag.svg' layout="fill" alt="shopping-bag-icon" />
            <span className="absolute text-sm font-bold -mb-1">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon
