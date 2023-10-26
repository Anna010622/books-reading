import { useTranslation } from 'react-i18next';
import ButtonMain from '../Buttons/ButtonMain';
import iconLibrary from '../../assets/icons/library.svg';
import iconFlag from '../../assets/icons/flag.svg';
import iconArrow from '../../assets/icons/arrow-down.svg';
import styles from './modalInfo.module.scss';

type Props = {
	close: () => void;
};
const ModalInfo = ({ close }: Props) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'libraryPage.infoModal',
	});

	return (
		<div className={styles.modal}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h2 className={styles.title}>{t('step1')}</h2>
					<div className={styles.wrapper}>
						<img
							className={styles.icon}
							src={iconLibrary}
							alt="Library icon"
							width="22"
							height="17"
						/>
						<div className={styles.content}>
							<h3 className={styles.subTitle}>{t('title1')}</h3>
							<div className={styles.inner}>
								<img
									className={styles.arrow}
									src={iconArrow}
									alt="down arrow"
									width="10"
									height="12"
								/>
								<p className={styles.text}>{t('description1')}</p>
							</div>
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title}>{t('step1')}</h2>
					<div className={styles.wrapper}>
						<img
							className={styles.icon}
							src={iconFlag}
							alt="Flag icon"
							width="15"
							height="17"
						/>
						<div className={styles.content}>
							<h3 className={styles.subTitle}>{t('title2')}</h3>
							<div className={styles.inner}>
								<img
									className={styles.arrow}
									src={iconArrow}
									alt="down arrow"
									width="10"
									height="12"
								/>
								<p className={styles.text}>{t('description2')}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>

			<ButtonMain title="Ok" onClick={() => close()} />
		</div>
	);
};

export default ModalInfo;
