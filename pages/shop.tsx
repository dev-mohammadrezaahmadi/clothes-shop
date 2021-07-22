import { useState } from "react";
import { SHOP_DATA } from "../data/shop.data";
import CollectionPreview from "../components/CollectionPreview";

const Shop: React.FC = () => {
	const [collections, setCollections] = useState(SHOP_DATA);
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default Shop;
