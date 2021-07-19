import styled from "styled-components";

interface MenuItemProps {
	imageUrl: string;
	size?: string;
	title: string;
	className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ className, title }) => {
	return (
		<div className={className}>
			<div className="background-image" />
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</div>
	);
};

export default styled(MenuItem)`
	min-width: 30%;
	height: ${({ size }) => (size === "large" ? "480px" : "360px")};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	.background-image {
		background-image: url(${({ imageUrl }) => imageUrl});
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
	}

	.content {
		height: 90px;
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid black;
		background-color: white;
		opacity: 0.7;
		position: absolute;

		.title {
			font-weight: bold;
			margin: 0 6px 0;
			font-size: 22px;
			color: #4a4a4a;
		}

		.subtitle {
			font-weight: lighter;
			font-size: 16px;
		}
	}
`;
