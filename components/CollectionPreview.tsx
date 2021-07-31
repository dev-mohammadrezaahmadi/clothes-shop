import { CollectionDataItemsType } from "../data/shop.data";
import CollectionItem from "./CollectionItem";
interface CollectionPreviewProps {
	title: string;
	items: CollectionDataItemsType[];
}
const CollectionPreview: React.FC<CollectionPreviewProps> = ({
	title,
	items,
}) => {
	return (
		<div className="flex flex-col">
			<h1 className="font-extrabold text-4xl py-2 my-2 mt-10">{title.toUpperCase()}</h1>
			<div style={{}} className="w-full flex flex-col justify-between sm:flex-row sm:overflow-x-scroll lg:overflow-auto gap-2">
				{items
					.filter((_, index) => index < 5)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
