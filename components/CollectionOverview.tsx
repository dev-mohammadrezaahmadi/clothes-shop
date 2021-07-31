import CollectionPreview from "./CollectionPreview";
import { CollectionDataType } from '../data/shop.data'

interface CollectionOverviewProps {
    collections: CollectionDataType[]
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {

    return (
        <div className="py-4">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionOverview
