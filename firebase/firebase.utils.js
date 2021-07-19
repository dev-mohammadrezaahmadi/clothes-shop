import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBLZYvRgpkzA1aN5zmU9biYs3KS8XzvDbs",
	authDomain: "clothes-shop-database.firebaseapp.com",
	projectId: "clothes-shop-database",
	storageBucket: "clothes-shop-database.appspot.com",
	messagingSenderId: "489953195870",
	appId: "1:489953195870:web:aafc452b31540b2e6a41cf",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
