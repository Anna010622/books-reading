import { useTranslation } from 'react-i18next';
import GoalsCard from './GoalCard/GoalCard';
import styles from './goalsBoard.module.scss';

const GoalsBoard = ({ amountOfDays = 0, amountOfBooks = 0 }) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'homePage.goalsBoard',
	});

	const booksLeft = 0;

	return (
		<div
			className={
				booksLeft > 0 ? `${styles.board} boardWithThreeCards` : styles.board
			}
		>
			<h2 className={styles.title}>{t('My goals')}</h2>
			<div className={styles.wrapper}>
				<GoalsCard title={t('Amount of books')} number={amountOfBooks} />
				<GoalsCard title={t('Amount of days')} number={amountOfDays} />
				{booksLeft > 0 && (
					<GoalsCard title={t('Books left')} number={booksLeft} />
				)}
			</div>
		</div>
	);
};

export default GoalsBoard;
