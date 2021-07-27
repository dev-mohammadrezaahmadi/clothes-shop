import { StyledMenuItem } from '../styles/MenuItem.styles'
import { useRouter } from 'next/router'
interface MenuItemProps {
	imageUrl: string;
	size?: string;
	title: string;
	className?: string;
	linkUrl: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
	const router = useRouter()
	return (
		<StyledMenuItem imageUrl={imageUrl} size={size} onClick={() => router.push(`/${linkUrl}`)}>
			<div className="background-image" />
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</StyledMenuItem>
	);
};

export default MenuItem
