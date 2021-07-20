import React, { ReactNode } from "react";
import { StyledCustomButton } from './CustomButton.styles'
export interface CustomButtonProps {
	children: ReactNode;
	type?: "submit" | "reset" | "button";
	onClick?: () => any;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
}



const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	...props
}) => {

	return (
		<StyledCustomButton {...props}>{children}</StyledCustomButton>
	)

};

export default CustomButton;
