import CollectionItem from '../../components/CollectionItem'
import styles from '../../styles/Collection.module.scss'
import { getCollectionsFromDB } from '../../firebase/firebase.utils'
import { CollectionDataType } from '../../data/shop.data'
interface CollectoinPageProps {
    params: {
        id: string
    }
    collection: CollectionDataType
}

const CollectionPage: React.FC<CollectoinPageProps> = ({ params, collection }) => {
    const { title, items } = collection
    console.log(params)
    console.log(collection)
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

export async function getStaticProps({ params }: { params: { id: string } }) {
    const collections = await getCollectionsFromDB('collections')
    const collection = collections.find(collection => collection.routeName === params.id)
    return {
        props: {
            collection
        }
    }
}

export async function getStaticPaths() {
    const collections = await getCollectionsFromDB('collections')
    const paths = collections.map(collection => ({ params: { id: collection.routeName } }))
    return {
        paths,
        fallback: false
    }
}

export default CollectionPage

