import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '../firebase/firebase.utils';
import styles from '../styles/Header.module.scss'
import { useAppSelector } from '../redux/hooks'
import { selectCurrentUser } from '../redux/slices/user.reducer'

const Header: React.FC = () => {
    const currentUser = useAppSelector(selectCurrentUser)
    return (
        <div className={styles.header}>
            <Link passHref href="/">
                <div className={styles.logo_container}>
                    <Image alt="logo" src="/crown.svg" width={'100%'} height={'100%'} className={styles.logo} />
                </div>
            </Link>
            <div className={styles.options}>
                <Link href='/shop'>
                    <a className={styles.option}>
                        SHOP
                    </a>
                </Link>
                {
                    currentUser ? (
                        <div className={styles.option} onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link href='/enter'>
                            <a className={styles.option}>
                                SIGN IN
                            </a>
                        </Link>
                    )
                }

                <Link href='/shop'>
                    <a className={styles.option}>
                        CONTACT
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Header
