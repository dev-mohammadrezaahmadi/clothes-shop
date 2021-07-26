import { ShopDataItemsType } from "../data/shop.data";
import { StyledCollectionItem } from '../styles/CollectionItem.styles'
import CustomButton from "./CustomButton";
import { addItem } from '../redux/slices/cart.reducer'
import { useAppDispatch } from '../redux/hooks'

interface CollectionItemProps {
	item: ShopDataItemsType
}

const CollectionItem: React.FC<CollectionItemProps> = ({
	item
}) => {
	const dispatch = useAppDispatch()
	const { name, price, imageUrl } = item
	return (
		<StyledCollectionItem imageUrl={imageUrl}>
			<div className="image" />
			<div className="custom_button">
				<CustomButton onClick={() => dispatch(addItem(item))} inverted={true}>Add to cart</CustomButton>
			</div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</StyledCollectionItem>
	);
};

export default CollectionItem