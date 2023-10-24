import ButtonMain from '../Buttons/ButtonMain';
import iconLibrary from '../../assets/icons/library.svg';
import iconFlag from '../../assets/icons/flag.svg';
import iconArrow from '../../assets/icons/arrow-down.svg';
import styles from './modalInfo.module.scss';

type Props = {
	close: () => void;
};
const ModalInfo = ({ close }: Props) => {
	return (
		<div className={styles.modal}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h2 className={styles.title}>Крок 1.</h2>
					<div className={styles.wrapper}>
						<img
							className={styles.icon}
							src={iconLibrary}
							alt="Library icon"
							width="22"
							height="17"
						/>
						<div className={styles.content}>
							<h3 className={styles.subTitle}>Створіть особисту бібліотеку</h3>
							<div className={styles.inner}>
								<img
									className={styles.arrow}
									src={iconArrow}
									alt="down arrow"
									width="10"
									height="12"
								/>
								<p className={styles.text}>
									Додайте до неї книжки, які маєте намір прочитати.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<h2 className={styles.title}>Крок 2.</h2>
					<div className={styles.wrapper}>
						<img
							className={styles.icon}
							src={iconFlag}
							alt="Flag icon"
							width="15"
							height="17"
						/>
						<div className={styles.content}>
							<h3 className={styles.subTitle}>
								Сформуйте своє перше тренування
							</h3>
							<div className={styles.inner}>
								<img
									className={styles.arrow}
									src={iconArrow}
									alt="down arrow"
									width="10"
									height="12"
								/>
								<p className={styles.text}>
									Визначте ціль, оберіть період, розпочинайте тренування.
								</p>
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
