import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow-back.svg';
import LibraryFrom from '../../components/LibraryForm/LibraryForm';
import styles from './libraryPage.module.scss';
import { useState } from 'react';
import ModalOverlay from '../../components/ModalOverlay/ModalOverlay';
import ModalInfo from '../../components/ModalInfo/ModalInfo';

const LibraryPage = () => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(true);

	const handleModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<div className={`container ${styles.pageContainer}`}>
			<Link to="/home" className={styles.backLink}>
				<img src={backIcon} alt="icon arrow back" width="24" height="12" />
			</Link>

			<LibraryFrom />

			{isModalOpened && (
				<ModalOverlay close={handleModalClose} className="withoutBg">
					<ModalInfo close={handleModalClose} />
				</ModalOverlay>
			)}
		</div>
	);
};

export default LibraryPage;
