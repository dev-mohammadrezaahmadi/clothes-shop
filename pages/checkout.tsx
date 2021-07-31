import CheckoutItem from '../components/CheckoutItem'
import { useAppSelector } from '../redux/hooks'
import { selectCartItems, selectCartItemsPriceTotal } from '../redux/slices/cart.reducer'

const CheckoutPage = () => {
    const cartItems = useAppSelector(selectCartItems)
    const total = useAppSelector(selectCartItemsPriceTotal)
    return (
        <div style={{ minHeight: "90vh" }} className="my-8 p-4 w-full lg:w-1/2 sm:w-2/3 md:w-3/4 flex flex-col items-center mx-auto">
            <div className="w-full py-3 flex border-b-2 border-gray-400">
                <div className="w-1/4 capitalize text-xs sm:text-xl lg:text-2xl ">
                    <span>Product</span>
                </div>
                <div className="w-1/4 capitalize text-xs sm:text-xl lg:text-2xl">
                    <span>Description</span>
                </div>
                <div className="w-1/4 sm:w-1/4 capitalize text-xs sm:text-xl lg:text-2xl">
                    <span>Quantity</span>
                </div>
                <div className="w-1/6 capitalize text-xs sm:text-xl lg:text-2xl">
                    <span>price</span>
                </div>
                <div className="w-1/8 capitalize text-xs sm:text-xl lg:text-2xl">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="mt-8 text-xl sm:text-3xl md:text-4xl ml-auto">TOTAL: ${total}</div>
        </div>
    )
}

export default CheckoutPage
