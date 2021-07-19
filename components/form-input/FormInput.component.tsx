import React from "react";
import styled, { css } from "styled-components";

interface FormInputProps {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	name: string;
	type: string;
	value: string;
	label: string;
	required?: boolean;
	className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
	className,
	handleChange,
	label,
	...otherProps
}) => {
	return (
		<div className={`group__${className}`}>
			<input className={"form-input"} onChange={handleChange} {...otherProps} />
			{label ? <label className={"form-input-label"}>{label}</label> : null}
		</div>
	);
};

// Styles
const subColor = "grey";
const mainColor = "black";
const shrink = css`
	color: ${mainColor};
	font-size: 12px;
	top: -14px;
`;

const StyledFormInput = styled(FormInput)`
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
		${(props) => (props.value.length ? shrink : "")}
	}
`;

export default StyledFormInput;
