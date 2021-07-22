import styled, { css } from "styled-components";

interface StyledFormInputProps {
	value: string;
}

const subColor = "grey";
const mainColor = "black";
const shrink = css`
	color: ${mainColor};
	font-size: 12px;
	top: -14px;
`;

export const StyledFormInput = styled.div<StyledFormInputProps>`
	position: relative;
	margin: 45px 0;

	.form-input {
		background: none;
		background-color: white;
		color: ${subColor};
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid ${subColor};
		margin: 25px 0;

		&:focus {
			outline: none;
		}

		&:focus ~ .form-input-label {
			${shrink}
		}
	}

	input[type="password"] {
		letter-spacing: 0.3em;
	}

	.form-input-label {
		color: ${subColor};
		font-size: 16px;
		top: 10px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		transition: 300ms ease all;
	}

	.form-input-label {
		${({ value }) => (value.length ? shrink : "")}
	}
`;
