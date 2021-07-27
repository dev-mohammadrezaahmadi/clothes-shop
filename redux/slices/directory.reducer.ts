import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DIRECTORY, DirectoryTypes } from "../../data/directory.data";

interface DirectoryStateTypes {
	sections: DirectoryTypes[];
}
const initialState: DirectoryStateTypes = {
	sections: DIRECTORY,
};

export const directorySlice = createSlice({
	name: "directory",
	initialState,
	reducers: {},
});

export const selectDirectory = (state: RootState) => state.directory.sections;
export default directorySlice.reducer;
