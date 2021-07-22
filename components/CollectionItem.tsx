import { ShopDataItemsType } from "../data/shop.data";
import { StyledCollectionItem } from '../styles/CollectionItem.styles'

const CollectionItem: React.FC<ShopDataItemsType> = ({
	name,
	price,
	imageUrl
}) => {
	return (
		<StyledCollectionItem imageUrl={imageUrl}>
			<div className="image" />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</StyledCollectionItem>
	);
};

export default CollectionItem