import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/slices/user.reducer";
import { useAppDispatch } from "../../redux/hooks";

export default function AuthProvider({ children }) {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		let unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userRef = await createUserProfileDocument(user);

				userRef?.onSnapshot((snapshot) => {
					dispatch(
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					);
				});
			} else {
				dispatch(setCurrentUser(user));
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return <>{children}</>;
}
