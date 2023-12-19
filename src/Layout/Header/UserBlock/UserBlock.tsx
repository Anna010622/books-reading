import { useTranslation } from 'react-i18next';
import styles from './userBlock.module.scss';

const UserBlock = () => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'header',
	});
	return (
		<div className={styles.userBlock}>
			<div className={styles.user}>
				<div className={styles.userIcon}>
					<p className={styles.iconText}>U</p>
				</div>
				<p className={styles.userName}>UserName</p>
			</div>

			<button className={styles.exit}>{t('logout')}</button>
		</div>
	);
};

export default UserBlock;
