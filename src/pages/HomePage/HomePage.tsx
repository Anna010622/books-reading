import { useTranslation } from 'react-i18next';
import styles from './homePage.module.scss';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<div className={`container ${styles.pageContainer}`}>
			<p>HomePage</p>
			<p>{t('Welcome to React')}</p>
		</div>
	);
};

export default HomePage;
