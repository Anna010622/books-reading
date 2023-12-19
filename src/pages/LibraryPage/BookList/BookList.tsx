import { useTranslation } from 'react-i18next';
import Book, { Item } from '../Book/Book';
import styles from './bookList.module.scss';

type Props = {
	items: Item[];
	listTitle: string;
	className: string;
};

const BookList = ({ items, listTitle, className }: Props) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'libraryPage.bookList',
	});

	return (
		<div className={className}>
			<h2 className={styles.listTitle}>{t(listTitle)}</h2>
			<div className={styles.titles}>
				<p className={styles.title}>{t('Book title')}</p>
				<p className={styles.title}>{t('Author')}</p>
				<p className={styles.title}>{t('Year')}</p>
				<p className={styles.title}>{t('Pages')}</p>
				<p className={`${styles.title} ${styles.rating}`}>{t('Rating')}</p>
			</div>
			<ul className={styles.list}>
				{items.map(item => (
					<li key={item.id} className={styles.item}>
						<Book item={item} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookList;
