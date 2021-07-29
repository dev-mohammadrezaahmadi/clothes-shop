import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { checkUserSession } from "../../redux/slices/user.reducer";

export default function AuthProvider({ children }) {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return <>{children}</>;
}
