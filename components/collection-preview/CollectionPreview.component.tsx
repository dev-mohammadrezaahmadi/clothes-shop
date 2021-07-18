import { ShopDataItemsType } from '../../data/shop.data'
import CollectionItem from '../collection-item/CollectionItem.component'

interface CollectionPreviewProps {
    title: string
    items: ShopDataItemsType[]
}
const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((_, index) => index < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
