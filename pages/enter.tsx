import React from 'react'
import { useRouter } from "next/dist/client/router";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useAppSelector } from '../redux/hooks'
import { selectCurrentUser } from '../redux/slices/user.reducer'


const EnterPage: React.FC = () => {
	const user = useAppSelector(selectCurrentUser)
	const { push } = useRouter()

	if (user) push('/')

	return (
		<div className="flex justify-center mt-10">
			<div className="flex flex-col sm:flex-row p-4 w-full lg:w-3/4  gap-10  ">
				<SignIn />
				<SignUp />
			</div>
		</div>
	)

};

export default EnterPage;
