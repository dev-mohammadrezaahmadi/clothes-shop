import { CollectionDataItemsType } from "../data/shop.data";
import CollectionItem from "./CollectionItem";
import styles from "../styles/CollectionPreview.module.scss";
import { useRouter } from "next/router";

interface CollectionPreviewProps {
	title: string;
	items: CollectionDataItemsType[];
}
const CollectionPreview: React.FC<CollectionPreviewProps> = ({
	title,
	items,
}) => {
	const router = useRouter()
	return (
		<div className={styles.collection_preview}>
			<h1 className={styles.title}>{title.toUpperCase()}</h1>
			<div className={styles.preview}>
				{items
					.filter((_, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
