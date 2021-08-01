import React from "react";
import { auth, signInWithGoogle } from '../firebase/firebase.utils'
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import styles from "../styles/SignIn.module.scss";
import { useAppDispatch } from '../redux/hooks'
import { googleSignInStart, emailSignInStart } from '../redux/slices/user.reducer'


const SignIn: React.FC = () => {
	const dispatch = useAppDispatch()

	const [userCredential, setUserCredential] = React.useState({
		email: "",
		password: "",
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const { email, password } = userCredential
		dispatch(emailSignInStart({ email, password }))
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
					<CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn={true}> Sign in with GOOGLE</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
