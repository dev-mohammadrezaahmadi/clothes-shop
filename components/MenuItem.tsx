import { useRouter } from 'next/router'
import Image from 'next/image'
interface MenuItemProps {
	imageUrl: string;
	size?: string;
	title: string;
	className?: string;
	linkUrl: string
}



const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
	const router = useRouter()
	return (
		<div className={`flex h-full w-full relative overflow-hidden justify-center items-center group ${size === 'col' ? "lg:col-span-2 lg:row-span-2" : ""} ${size === 'row' ? "sm:row-span-2" : ""}`} onClick={() => router.push(`/${linkUrl}`)}>
			<div className="group-hover:scale-110 w-full h-full transition duration-300 ease-in-out ">
				<Image alt="collection" src={imageUrl} blurDataURL={imageUrl} placeholder="blur" layout="fill" className="object-cover" />
			</div>
			<div className={`absolute w-full bottom-0 md:bottom-auto md:flex-col md:w-auto md:border-black md:border md:justify-center md:p-4  bg-white h-20 flex justify-between px-4 items-center opacity-70 group-hover:opacity-90 hover:cursor-pointer`}>
				<div className="ml-5 mt-2 md:m-0 md:p-0 md:text-2xl text-black font-bold text-xl mb-2">{title.toUpperCase()}</div>
				<div className="font-bold md:m-2 md:p-0 md:text-xl text-lg bg-black text-white md:text-black md:bg-transparent md:rounded-none md:font-thin rounded-md p-3 cursor-pointer">SHOP NOW</div>
			</div>
		</div>
	);
};

export default MenuItem
