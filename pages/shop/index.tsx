import CollectionOverview from '../../components/CollectionOverview'
import { getCollectionsFromDB } from '../../firebase/firebase.utils';
import { CollectionDataType } from '../../data/shop.data'
interface ShopPageProps {
    collections: CollectionDataType[]
}
const Shop: React.FC<ShopPageProps> = ({ collections }) => {

    return (
        <div className="px-4">
            <CollectionOverview collections={collections} />
        </div>
    );
};

export default Shop;

export async function getServerSideProps() {
    const collections = await getCollectionsFromDB('collections')

    return {
        props: {
            collections
        }
    }
}