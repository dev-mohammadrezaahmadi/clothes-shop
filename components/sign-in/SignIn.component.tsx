import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import styles from "./SignIn.styles.module.scss";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


const SignIn = () => {

	const [userCredential, setUserCredential] = React.useState({
		email: "",
		password: "",
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const { email, password } = userCredential

		try {
			await auth.signInWithEmailAndPassword(email, password)
			setUserCredential({ email: '', password: '' })
		} catch (error) {
			console.error(error)
		}
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const { value, name } = e.target;
		setUserCredential({ ...userCredential, [name]: value });
	};
	return (
		<div className={styles.sign_in}>
			<h2 className={styles.title}>I already have an account</h2>
			<span >Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					onChange={handleChange}
					value={userCredential.email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={userCredential.password}
					onChange={handleChange}
					label="password"
					required
				/>
				<div className={styles.buttons}>
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with GOOGLE</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
