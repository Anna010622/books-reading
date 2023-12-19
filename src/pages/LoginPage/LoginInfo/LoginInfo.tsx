import { useTranslation } from 'react-i18next';
import styles from './loginInfo.module.scss';

const LoginInfo = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'loginPage.info',
	});

	return (
		<div className={styles.loginInfo}>
			<p className={styles.quote}>{t('quote')}</p>
			<p className={styles.author}>{t('author')}</p>
		</div>
	);
};

export default LoginInfo;
