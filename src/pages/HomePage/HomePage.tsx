import styles from './homePage.module.scss';
import GoalsBoard from '../../components/GoalsBoard/GoalsBoard';
// import Chart from './Chart/Chart';
import TrainingForm from './TrainingForm/TrainingForm';
import BtnMore from '../../components/Buttons/BtnMore/BtnMore';
import { useState } from 'react';
import FullScreenModal from './FullScreenModal/FullScreenModal';

const HomePage = () => {
	const [isVisibleModalTrainingForm, setIsVisibleModalTrainingForm] =
		useState(false);

	const closeFullScreenModal = () => {
		setIsVisibleModalTrainingForm(false);
	};

	return (
		<div className={`container ${styles.pageContainer}`}>
			<div className={styles.wrapper}>
				<GoalsBoard />
				<TrainingForm />
			</div>

			{/* <Chart /> */}
			{isVisibleModalTrainingForm && (
				<FullScreenModal closeModal={closeFullScreenModal}>
					<TrainingForm />
				</FullScreenModal>
			)}
			<BtnMore onClick={() => setIsVisibleModalTrainingForm(true)} />
		</div>
	);
};

export default HomePage;
