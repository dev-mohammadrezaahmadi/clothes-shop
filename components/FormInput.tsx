import React from "react";
import { StyledFormInput } from '../styles/FormInput.styles'

interface FormInputProps {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	name: string;
	type: 'password' | 'email' | 'text';
	value: string;
	label: string;
	required?: boolean;
	className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
	onChange,
	label,
	...otherProps
}) => {
	return (
		<StyledFormInput value={otherProps.value}>
			<input className={"form-input"} onChange={onChange} {...otherProps} />
			{label ? <label className={"form-input-label"}>{label}</label> : null}
		</StyledFormInput>
	);
};


export default FormInput;
