import CollectionItem from '../../components/CollectionItem'
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
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="font-extrabold text-4xl my-10">{title.toUpperCase()}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-hidden w-full sm:place-items-center">
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
            params,
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

