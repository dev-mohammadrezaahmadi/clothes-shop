import React from "react";
import {
	addCollectionAndDocumentsToDB,
	auth,
	createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/slices/user.reducer";
import { useAppDispatch } from "../../redux/hooks";
import { selectCollectionsForPreview } from "../../redux/slices/shop.reducer";
import { useAppSelector } from "../../redux/hooks";

export default function AuthProvider({ children }) {
	const dispatch = useAppDispatch();
	const collectionsArray = useAppSelector(selectCollectionsForPreview);
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
				// addCollectionAndDocumentsToDB(
				// 	"collections",
				// 	collectionsArray.map(({ title, items, routeName }) => ({
				// 		title,
				// 		items,
				// 		routeName,
				// 	}))
				// );
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <>{children}</>;
}
