import CollectionItem from '../../components/CollectionItem'
import { selectCollection } from '../../redux/slices/shop.reducer'
import { useAppSelector } from '../../redux/hooks'
import { SHOP_DATA } from '../../data/shop.data'
import styles from '../../styles/Collection.module.scss'

const CollectionPage = ({ params: { id } }: { params: { id: string } }) => {
    const { title, items } = useAppSelector(selectCollection(id))
    return (
        <div className={styles.collection_page}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export function getStaticProps({ params }: { params: any }) {
    return {
        props: {
            params
        }
    }
}

export function getStaticPaths() {
    const paths = Object.keys(SHOP_DATA).map(key => ({ params: { id: key } }))
    return {
        paths,
        fallback: false
    }
}

export default CollectionPage

