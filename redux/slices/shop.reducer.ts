import { createSlice } from "@reduxjs/toolkit";
import { SHOP_DATA, ShopDataType } from "../../data/shop.data";
import { RootState } from "../store";

interface ShopStateProps {
	collections: ShopDataType;
}

const initialState: ShopStateProps = {
	collections: SHOP_DATA,
};

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {},
});

export const selectShop = (state: RootState) => state.shop;
export const selectCollections = (state: RootState) => state.shop.collections;
// This selector is for transform the object to array that we can use it in some of our components like collectionPreviewComponent
export const selectCollectionsForPreview = (state: RootState) =>
	Object.keys(state.shop.collections).map((key) => state.shop.collections[key]);
// This is for dynamic routring to have collection ids for each page
export const selectCollection =
	(collectionUrlParam: string) => (state: RootState) =>
		state.shop.collections[collectionUrlParam];

export default shopSlice.reducer;
