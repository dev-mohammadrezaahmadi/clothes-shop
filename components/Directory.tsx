import React from 'react'
import MenuItem from './MenuItem'

import styles from '../styles/Directory.module.scss'


const Directory: React.FC = () => {
    const [items, setItems] = React.useState([{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
    }])

    return (
        <div className={styles.directory}>
            {
                items.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
                ))
            }
        </div>
    )
}

export default Directory;