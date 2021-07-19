import Link from 'next/link'
import styles from './Header.styles.module.scss'
import Image from 'next/image'
const Header = () => {
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
                <Link href='/signin'>
                    <a className={styles.option}>
                        SIGN IN
                    </a>
                </Link>
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
