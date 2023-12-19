import { useState } from 'react';
import Chart from './Chart/Chart';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import GoalsBoard from './GoalsBoard/GoalsBoard';
import TrainingForm from './TrainingForm/TrainingForm';
import BtnMore from '../../sharedComponents/Buttons/BtnMore/BtnMore';
import FullScreenModal from './FullScreenModal/FullScreenModal';
import ButtonMain from '../../sharedComponents/Buttons/ButtonMain';
import styles from './homePage.module.scss';

export type Book = {
	id: number;
	bookTitle: string;
	author: string;
	year: number;
	pages: number;
	rating: number;
};

export type Statistics = {
	date: string;
	pages: number;
};

const HomePage = () => {
	const [isVisibleModalTrainingForm, setIsVisibleModalTrainingForm] =
		useState(false);
	const [startDate, setStartDate] = useState<null | Date>(null);
	const [finishDate, setFinishDate] = useState<null | Date>(null);
	const [
		books,
		// setBooks
	] = useState<Book[]>([
		// {
		// 	id: 1,
		// 	bookTitle:
		// 		'Product management in Scrum. Agile methods for your business..',
		// 	author: 'Roman Pichler',
		// 	year: 2010,
		// 	pages: 20,
		// 	rating: 5,
		// },
		// {
		// 	id: 2,
		// 	bookTitle:
		// 		'Product management in Scrum. Agile methods for your business..',
		// 	author: 'Roman Pichler',
		// 	year: 2010,
		// 	pages: 30,
		// 	rating: 5,
		// },
		// {
		// 	id: 3,
		// 	bookTitle:
		// 		'Product management in Scrum. Agile methods for your business..',
		// 	author: 'Roman Pichler',
		// 	year: 2010,
		// 	pages: 40,
		// 	rating: 5,
		// },
	]);
	const [
		statistics,
		// setStatistics
	] = useState<Statistics[]>([
		// { date: '2023-12-18', pages: 10 },
		// { date: '2023-12-19', pages: 8 },
		// { date: '2023-12-19', pages: 11 },
		// { date: '2023-12-21', pages: 3 },
		// { date: '2023-12-24', pages: 4 },
	]);

	const closeFullScreenModal = () => {
		setIsVisibleModalTrainingForm(false);
	};

	let trainingDuration = 0;
	if (startDate !== null && finishDate !== null) {
		trainingDuration = differenceInCalendarDays(finishDate, startDate) + 1;
	}

	return (
		<div className={`container ${styles.pageContainer}`}>
			<div className={styles.wrapper}>
				<GoalsBoard
					amountOfDays={trainingDuration}
					amountOfBooks={books.length}
				/>
				<section className={styles.trainingSection}>
					<TrainingForm
						startDate={startDate}
						finishDate={finishDate}
						setStartDate={setStartDate}
						setFinishDate={setFinishDate}
					/>
					{/* list */}
					{startDate && finishDate && (
						<ButtonMain type="submit" form="trainingForm">
							Почати тренування
						</ButtonMain>
					)}

					<Chart
						startDate={startDate}
						finishDate={finishDate}
						books={books}
						statistics={statistics}
						trainingDuration={trainingDuration}
					/>
				</section>
			</div>

			{isVisibleModalTrainingForm && (
				<FullScreenModal closeModal={closeFullScreenModal}>
					<TrainingForm
						startDate={startDate}
						finishDate={finishDate}
						setStartDate={setStartDate}
						setFinishDate={setFinishDate}
					/>
				</FullScreenModal>
			)}
			<BtnMore onClick={() => setIsVisibleModalTrainingForm(true)} />
		</div>
	);
};

export default HomePage;
