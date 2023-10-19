import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import UserBlock from './UserBlock/UserBlock';
import styles from './header.module.scss';

const Header = () => {
	const className = `container ${styles.headerContainer}`;
	return (
		<header className={styles.header}>
			<div className={className}>
				<Logo />
				<div className={styles.rightSide}>
					<Nav />
					<UserBlock />
				</div>
			</div>
		</header>
	);
};

export default Header;
