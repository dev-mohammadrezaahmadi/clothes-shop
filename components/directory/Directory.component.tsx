import { useState } from 'react'
import styled from "styled-components"

import MenuItem from '../menu-item/MenuItem.component'

interface DirectoryProps {
    className?: string
}


const Directory: React.FC<DirectoryProps> = ({ className }) => {
    const [items, setItems] = useState([{
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
        <div className={className}>
            {
                items.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} imageUrl={imageUrl} size={size} title={title} />
                ))
            }
        </div>
    )
}

export default styled(Directory)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
