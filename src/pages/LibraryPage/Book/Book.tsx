import { useTranslation } from 'react-i18next';
import { MdMenuBook } from 'react-icons/md';
import { useState } from 'react';
import styles from './book.module.scss';
import ResumeModal from '../ResumeModal/ResumeModal';
import ModalOverlay from '../../../sharedComponents/ModalOverlay/ModalOverlay';
import Rating from '../../../sharedComponents/Rating/Rating';

export type Item = {
	id: number;
	bookTitle: string;
	author: string;
	year: number;
	pages: number;
	rating: number;
};

type Props = {
	item: Item;
};

const Book = ({ item }: Props) => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

	const { t } = useTranslation('translation', {
		keyPrefix: 'libraryPage.bookList',
	});

	const handleModalOpen = () => {
		setIsModalOpened(true);
	};
	const handleModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<>
			<MdMenuBook className={styles.icon} />

			<div className={styles.book}>
				<p className={styles.content}>{item.bookTitle}</p>
				<p className={`${styles.content} ${styles.grid}`}>
					<span className={styles.title}>{t('Author')}: </span> {item.author}
				</p>
				<p className={`${styles.content} ${styles.grid}`}>
					<span className={styles.title}>{t('Year')}: </span> {item.year}
				</p>
				<p className={`${styles.content} ${styles.grid}`}>
					<span className={styles.title}>{t('Pages')}: </span>
					{item.pages}
				</p>
				<div className={styles.rating}>
					<div className={`${styles.content} ${styles.grid}`}>
						<span className={styles.title}>{t('Rating')}: </span>
						<Rating rating={item.rating} />
					</div>
					<button className={styles.resume} onClick={handleModalOpen}>
						{t('Resume')}
					</button>
				</div>
			</div>
			{isModalOpened && (
				<ModalOverlay close={handleModalClose}>
					<ResumeModal onClose={handleModalClose} />
				</ModalOverlay>
			)}
		</>
	);
};

export default Book;
