import SignIn from "../components/sign-in/SignIn.component";
import { UserContext } from '../context/UserContext'
import React from 'react'
import { useRouter } from "next/dist/client/router";

const SignInUpPage: React.FC = () => {
	const { user } = React.useContext(UserContext);
	const { push } = useRouter()

	if (user) push('/')

	return (
		<div className="signInUpPage">
			<SignIn />
		</div>
	)

};

export default SignInUpPage;
