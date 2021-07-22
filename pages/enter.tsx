import React from 'react'
import { useRouter } from "next/dist/client/router";
import { UserContext } from '../context/UserContext'
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styles from '../styles/Enter.module.scss'


const EnterPage: React.FC = () => {
	const { user } = React.useContext(UserContext);
	const { push } = useRouter()

	if (user) push('/')

	return (
		<div className={styles.enter}>
			<SignIn />
			<SignUp />
		</div>
	)

};

export default EnterPage;
