import { Link } from 'react-router-dom';

import styles from './registrationInfo.module.scss';
import arrowIcon from '../../assets/icons/arrow-right.svg';
import ButtonMain from '../Buttons/ButtonMain';

const RegistrationInfo = () => {
	const handleClick = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<section className={styles.section}>
			<h1 className={styles.mainTitle}>Books Reading</h1>

			<div className={styles.infoWrapper}>
				<h2 className={styles.listTitle}>Допоможе вам</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>
							Швидше сформулювати свою ціль і розпочати читати
						</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>
							Пропорційно розподілити навантаження на кожний день
						</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>
							Пропорційно розподілити навантаження на кожний день
						</p>
					</li>
				</ul>

				<h2 className={styles.listTitle}>Також ви зможете </h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>
							Формувати особисту думку незалежну від інших
						</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>
							Підвищити свої професійні якості опираючись на нові знання
						</p>
					</li>
					<li className={styles.item}>
						<img
							className={styles.arrowIcon}
							src={arrowIcon}
							alt="arrow icon"
							width="4px"
							height="8px"
						/>
						<p className={styles.text}>Стати цікавим співрозмовником</p>
					</li>
				</ul>
			</div>

			<div className={styles.links}>
				<Link className={styles.link} to="/login">
					Увійти
				</Link>
				<ButtonMain title="Реєстрація" onClick={handleClick} />
			</div>
		</section>
	);
};

export default RegistrationInfo;
