import React from 'react'
import { useRouter } from "next/dist/client/router";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styles from '../styles/Enter.module.scss'
import { useAppSelector } from '../redux/hooks'
import { selectCurrentUser } from '../redux/slices/user.reducer'


const EnterPage: React.FC = () => {
	// const { user } = React.useContext(UserContext);
	const user = useAppSelector(selectCurrentUser)
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
