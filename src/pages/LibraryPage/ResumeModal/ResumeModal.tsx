import { useTranslation } from 'react-i18next';
import OutlineButton from '../../../sharedComponents/Buttons/OutlineButton/OutlineButton';
import ButtonMain from '../../../sharedComponents/Buttons/ButtonMain';
import styles from './resumeModal.module.scss';
import { useState, FormEvent } from 'react';
import Rating from '../../../sharedComponents/Rating/Rating';

type Props = {
	onClose: () => void;
};

const ResumeModal = ({ onClose }: Props) => {
	const [rating, setRating] = useState(0);
	const [resume, setResume] = useState('');
	const [hover, setHover] = useState<number | null>(null);

	const { t } = useTranslation('translation', {
		keyPrefix: 'libraryPage.resumeModal',
	});

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (rating || resume) console.log('Send: ', rating, resume);
		onClose();
	};

	return (
		<form className={styles.modal} onSubmit={handleSubmit}>
			<h2 className={styles.title}>{t('Choose rating of the book')}</h2>
			<div className={styles.rating}>
				<Rating
					rating={rating}
					hover={hover}
					setHover={setHover}
					setRating={setRating}
				/>
			</div>
			<h2 className={styles.title}>{t('Resume')}</h2>
			<textarea
				name="resume"
				className={styles.resume}
				rows={9}
				placeholder="..."
				value={resume}
				onChange={event => setResume(event.target.value)}
			></textarea>
			<div className={styles.buttons}>
				<OutlineButton onClick={onClose}>{t('Back')}</OutlineButton>
				<ButtonMain>{t('Save')}</ButtonMain>
			</div>
		</form>
	);
};

export default ResumeModal;
