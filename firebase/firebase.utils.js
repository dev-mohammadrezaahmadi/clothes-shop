import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
	authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
	projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
	storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
	appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
				...additionalData,
			});
		} catch (error) {
			console.error("error creating user", error.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocumentsToDB = async (
	collectionKey,
	itemsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	itemsToAdd.forEach((item) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, item);
	});

	return await batch.commit();
};

export const getCollectionsFromDB = async (collectionName) => {
	const collectionRef = firestore.collection(collectionName);
	const collections = (await collectionRef.get()).docs.map((doc) => doc.data());
	return collections;
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
