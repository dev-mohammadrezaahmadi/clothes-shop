import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useAppSelector } from '../redux/hooks'
import { selectCurrentUser } from '../redux/slices/user.reducer'
import { selectCartHidden } from '../redux/slices/cart.reducer'
import CartIcon from './CartIcon';
import CartDropdowon from './CartDropdowon';
import { signOutStart } from '../redux/slices/user.reducer'
import { useAppDispatch } from '../redux/hooks'

const Header: React.FC = () => {
    const currentUser = useAppSelector(selectCurrentUser)
    const hidden = useAppSelector(selectCartHidden)
    const dispatch = useAppDispatch()
    return (
        <div style={{ height: '10%' }} className="w-full md:px-16 md:pt-8 px-4 flex justify-between shadow-lg md:shadow-none">
            <Link passHref href="/">
                <div className="flex items-center h-full w-12 md:w-16 p-1">
                    <Image alt="logo" src="/crown.svg" width={'100%'} height={'100%'} className="cursor-pointer object-contain" />
                </div>
            </Link>
            <div className="w-4/5 h-full flex items-center justify-end text-sm sm:text-xl ">
                <Link href='/shop'>
                    <a className="p-1 cursor-pointer mx-1 font-semibold sm:font-normal md:mx-6">
                        SHOP
                    </a>
                </Link>
                {
                    currentUser ? (
                        <div className="p-1 cursor-pointer mx-1 font-semibold sm:font-normal md:mx-6" onClick={() => dispatch(signOutStart())}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link href='/enter'>
                            <a className="p-1 cursor-pointer mx-1 font-semibold sm:font-normal md:mx-6">
                                SIGN IN
                            </a>
                        </Link>
                    )
                }


                <CartIcon />
            </div>
            {hidden ? null : <CartDropdowon />}
        </div>
    )
}

export default Header
