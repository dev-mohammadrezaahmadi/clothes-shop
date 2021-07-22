import styled, { css } from "styled-components";
import { CustomButtonProps } from "./CustomButton.component";

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;
	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	border: none;
	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props: CustomButtonProps) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const StyledCustomButton = styled.button`
	min-width: 165px;
	width: max-content;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 15px 0 15px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;
