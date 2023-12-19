import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow-back.svg';
import LibraryFrom from './LibraryForm/LibraryForm';
import styles from './libraryPage.module.scss';
import { useState } from 'react';
import ModalOverlay from '../../sharedComponents/ModalOverlay/ModalOverlay';
import ModalInfo from './ModalInfo/ModalInfo';
import BookList from './BookList/BookList';

const books = [
	{
		id: 1,
		bookTitle: 'Development of valuable proposals..',
		author: 'Alex Osterwalder, Yves Pigneur',
		year: 2013,
		pages: 368,
		rating: 0,
	},
	{
		id: 2,
		bookTitle: 'Product management in Scrum. Agile methods for your business..',
		author: 'Roman Pichler',
		year: 2010,
		pages: 92,
		rating: 5,
	},
];

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

			<div className={styles.books}>
				<BookList items={books} listTitle="Already read" className="already" />
				<BookList items={books} listTitle="Reading now" className="reading" />
				<BookList items={books} listTitle="Going to read" className="going" />
			</div>
		</div>
	);
};

export default LibraryPage;
