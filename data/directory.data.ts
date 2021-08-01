export interface DirectoryTypes {
	title: string;
	imageUrl: string;
	id: number;
	size?: string;
	linkUrl: string;
}

export const DIRECTORY: DirectoryTypes[] = [
	{
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		id: 1,
		linkUrl: "shop/hats",
		size: "",
	},
	{
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		id: 2,
		linkUrl: "shop/jackets",
		size: "",
	},
	{
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		id: 3,
		linkUrl: "shop/sneakers",
		size: "",
	},
	{
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		size: "row",
		id: 4,
		linkUrl: "shop/womens",
	},
	{
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		size: "col",
		id: 5,
		linkUrl: "shop/mens",
	},
];
