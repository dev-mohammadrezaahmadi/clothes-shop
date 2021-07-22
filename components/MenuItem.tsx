import { StyledMenuItem } from '../styles/MenuItem.styles'

interface MenuItemProps {
	imageUrl: string;
	size?: string;
	title: string;
	className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
	return (
		<StyledMenuItem imageUrl={imageUrl} size={size}>
			<div className="background-image" />
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</StyledMenuItem>
	);
};

export default MenuItem
