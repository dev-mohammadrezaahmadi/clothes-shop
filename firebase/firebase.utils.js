import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: "clothes-shop-database.firebaseapp.com",
	projectId: "clothes-shop-database",
	storageBucket: "clothes-shop-database.appspot.com",
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const createUserProfileDocument = async (userAuth, addtionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;

		try {
			await userRef.set({
				displayName,
				email,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				...addtionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
