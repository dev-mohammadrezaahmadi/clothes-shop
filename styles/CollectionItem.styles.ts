import styled from "styled-components";

interface StyledCollectionItemProps {
	imageUrl: string | null;
}

export const StyledCollectionItem = styled.div<StyledCollectionItemProps>`
	width: 20vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	.custom_button {
		position: absolute;
		display: none;
		width: 100%;
		opacity: 0.7;
		bottom: 50px;
		transform: translateX(25%);
	}

	.image {
		width: 100%;
		height: 95%;
		background-image: url(${({ imageUrl }) => imageUrl});
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;
	}

	&:hover {
		.image {
			opacity: 0.8;
		}

		.custom_button {
			display: flex;
			opacity: 0.8;
		}
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
