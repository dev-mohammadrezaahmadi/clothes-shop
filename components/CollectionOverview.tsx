import CollectionPreview from "./CollectionPreview";
import { selectCollectionsForPreview } from '../redux/slices/shop.reducer'
import { useAppSelector } from '../redux/hooks'

import styles from '../styles/CollectionOverview.module.scss'

const CollectionOverview = () => {
    const collections = useAppSelector(selectCollectionsForPreview)

    return (
        <div className={styles.collections_overview}>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionOverview
