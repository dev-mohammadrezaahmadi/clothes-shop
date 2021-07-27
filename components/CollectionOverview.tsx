import CollectionPreview from "./CollectionPreview";
import { CollectionDataType } from '../data/shop.data'
import styles from '../styles/CollectionOverview.module.scss'

interface CollectionOverviewProps {
    collections: CollectionDataType[]
}

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {

    return (
        <div className={styles.collections_overview}>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionOverview
