import { CollectionDataItemsType } from "../data/shop.data";
import CustomButton from "./CustomButton";
import { addItem } from '../redux/slices/cart.reducer'
import { useAppDispatch } from '../redux/hooks'
import Image from 'next/image'
interface CollectionItemProps {
	item: CollectionDataItemsType
}

const CollectionItem: React.FC<CollectionItemProps> = ({
	item
}) => {
	const dispatch = useAppDispatch()
	const { name, price, imageUrl } = item
	return (
		<div className="flex flex-col flex-shrink-0 group items-center relative item-size-responsive">
			<div className="w-full h-full bg-cover bg-center group-hover:opacity-80">
				<Image src={imageUrl} layout="fill" alt="items photo" />
			</div>
			<div className="absolute bottom-24 opacity-0 group-hover:opacity-80">
				<CustomButton onClick={() => dispatch(addItem(item))} inverted={true}>Add to cart</CustomButton>
			</div>
			<div className="absolute bottom-0 text-white p-4 w-full flex justify-between text-xl bg-black bg-opacity-60">
				<span className="font-bold ">{name}</span>
				<span className="border border-white rounded-md p-1">{`$${price}`}</span>
			</div>
		</div>
	);
};

export default CollectionItem