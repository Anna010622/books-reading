import iconHome from '../../../assets/icons/home.svg';
import iconLibrary from '../../../assets/icons/library.svg';

type Item = {
	id: string;
	link: string;
	icon: string;
	iconWidth: string;
	title: string;
};
const navItems: Item[] = [
	{
		id: '1',
		link: '/',
		icon: iconLibrary,
		iconWidth: '22',
		title: 'Icon Library',
	},
	{
		id: '2',
		link: 'home',
		icon: iconHome,
		iconWidth: '20',
		title: 'Icon Home',
	},
];

export default navItems;
