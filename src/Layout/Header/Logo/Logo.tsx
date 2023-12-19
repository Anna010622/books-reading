import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => {
	return (
		<Link to={'/'}>
			<p className={styles.logo}>BR</p>
		</Link>
	);
};

export default Logo;
