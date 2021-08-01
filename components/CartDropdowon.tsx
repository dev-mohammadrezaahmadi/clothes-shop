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
        <div className="absolute w-72 h-96 flex flex-col items-center p-5 border border-black bg-white top-24 right-4 z-50">
            <div className="flex w-full h-80 flex-col overflow-y-scroll mb-4">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className="mt-24 font-bold mx-auto">Your cart is empty</span>
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
