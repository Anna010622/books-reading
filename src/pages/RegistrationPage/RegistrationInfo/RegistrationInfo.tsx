import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ButtonMain from '../../../sharedComponents/Buttons/ButtonMain';
import arrowIcon from '../../../assets/icons/arrow-right.svg';
import styles from './registrationInfo.module.scss';

const RegistrationInfo = () => {
	const handleClick = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};
	const { t } = useTranslation('translation', {
		keyPrefix: 'registrationPage.info',
	});

	return (
		<section className={styles.section}>
			<h1 className={styles.mainTitle}>Books Reading</h1>

			<div className={styles.infoWrapper}>
				<h2 className={styles.listTitle}>{t('title1')}</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item1')}</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item2')}</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item3')}</p>
					</li>
				</ul>

				<h2 className={styles.listTitle}>{t('title2')}</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item4')}</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item5')}</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>{t('item6')}</p>
					</li>
				</ul>
			</div>

			<div className={styles.links}>
				<Link className={styles.link} to="/login">
					{t('login')}
				</Link>
				<ButtonMain onClick={handleClick}>{t('register')}</ButtonMain>
			</div>
		</section>
	);
};

export default RegistrationInfo;
