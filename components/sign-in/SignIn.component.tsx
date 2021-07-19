import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import styles from "./SignIn.Styles.module.scss";

const SignIn = () => {
	const [userCredential, setUserCredential] = React.useState({
		email: "",
		password: "",
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		setUserCredential({ ...userCredential, email: "", password: "" });
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const { value, name } = e.target;
		setUserCredential({ ...userCredential, [name]: value });
	};
	return (
		<div className={styles.sign_in}>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={userCredential.email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={userCredential.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<CustomButton type="submit"> Sign in </CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
