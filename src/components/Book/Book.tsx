import { useTranslation } from 'react-i18next';
import { MdMenuBook } from 'react-icons/md';
import styles from './book.module.scss';

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
	const { t } = useTranslation('translation', {
		keyPrefix: 'libraryPage.bookList',
	});

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
					<p className={`${styles.content} ${styles.grid}`}>
						<span className={styles.title}>{t('Rating')}: </span>
						{item.rating}
					</p>
					<button className={styles.resume}>{t('Resume')}</button>
				</div>
			</div>
		</>
	);
};

export default Book;
