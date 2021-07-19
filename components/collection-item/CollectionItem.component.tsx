import styled from "styled-components";
import { ShopDataItemsType } from "../../data/shop.data";

interface CollectionItemProps extends ShopDataItemsType {
	className?: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
	className,
	name,
	price,
}) => {
	return (
		<div className={className}>
			<div className="image" />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</div>
	);
};

export default styled(CollectionItem)`
	width: 22%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;

	.image {
		width: 100%;
		height: 95%;
		background-image: url(${({ imageUrl }) => imageUrl});
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;
	}

	.collection-footer {
		width: 100%;
		height: 5%;
		display: flex;
		justify-content: space-between;
		font-size: 18px;

		.name {
			width: 90%;
			margin-bottom: 15px;
		}

		.price {
			width: 10%;
		}
	}
`;
