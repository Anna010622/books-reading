import { useTranslation } from 'react-i18next';
import styles from './homePage.module.scss';
import GoalsBoard from '../../components/GoalsBoard/GoalsBoard';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<div className={`container ${styles.pageContainer}`}>
			<GoalsBoard />
		</div>
	);
};

export default HomePage;
