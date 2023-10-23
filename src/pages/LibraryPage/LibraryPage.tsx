import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow-back.svg';
import styles from './libraryPage.module.scss';
import LibraryFrom from '../../components/LibraryForm/LibraryForm';

const LibraryPage = () => {
	return (
		<div className={`container ${styles.pageContainer}`}>
			<Link to="/home" className={styles.backLink}>
				<img src={backIcon} alt="icon arrow back" width="24" height="12" />
			</Link>

			<LibraryFrom />
		</div>
	);
};

export default LibraryPage;
