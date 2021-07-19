import React, { ReactNode } from "react";
import styles from "./CustomButton.styles.module.scss";

interface CustomButtonProps {
	children: ReactNode;
	type?: "submit" | "reset" | "button";
}

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	...otherProps
}) => {
	return (
		<button className={styles.custom_button} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
