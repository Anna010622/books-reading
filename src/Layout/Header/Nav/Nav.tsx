import { NavLink } from 'react-router-dom';
import items from './nav-items';
import styles from './nav.module.scss';

const Nav = () => {
	return (
		<nav>
			<ul className={styles.navList}>
				{items.map(item => (
					<li key={item.id}>
						<NavLink className={styles.link} to={item.link}>
							<img
								src={item.icon}
								alt={item.title}
								height="18"
								width={item.iconWidth}
							/>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
