import styles from './homePage.module.scss';
import GoalsBoard from '../../components/GoalsBoard/GoalsBoard';
// import Chart from './Chart/Chart';
import TrainingForm from './TrainingForm/TrainingForm';
import BtnMore from '../../components/Buttons/BtnMore/BtnMore';
import { useState } from 'react';
import FullScreenModal from './FullScreenModal/FullScreenModal';
import ButtonMain from '../../components/Buttons/ButtonMain';

const HomePage = () => {
	const [isVisibleModalTrainingForm, setIsVisibleModalTrainingForm] =
		useState(false);
	const [startDate, setStartDate] = useState<null | Date>(null);
	const [finishDate, setFinishDate] = useState<null | Date>(null);

	const closeFullScreenModal = () => {
		setIsVisibleModalTrainingForm(false);
	};

	return (
		<div className={`container ${styles.pageContainer}`}>
			<div className={styles.wrapper}>
				<GoalsBoard />
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
				</section>
			</div>

			{/* <Chart /> */}
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
