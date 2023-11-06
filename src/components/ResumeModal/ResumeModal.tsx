import ButtonBorder from '../Buttons/ButtonBorder/ButtonBorder';
import ButtonMain from '../Buttons/ButtonMain';
import styles from './resumeModal.module.scss';
import { useState, FormEvent } from 'react';
import Rating from '../Rating/Rating';

type Props = {
	onClose: () => void;
};

const ResumeModal = ({ onClose }: Props) => {
	const [rating, setRating] = useState(0);
	const [resume, setResume] = useState('');
	const [hover, setHover] = useState<number | null>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (rating || resume) console.log('Send: ', rating, resume);
		onClose();
	};

	return (
		<form className={styles.modal} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Choose rating of the book</h2>
			<div className={styles.rating}>
				<Rating
					rating={rating}
					hover={hover}
					setHover={setHover}
					setRating={setRating}
				/>
			</div>
			<h2 className={styles.title}>Resume</h2>
			<textarea
				name="resume"
				className={styles.resume}
				rows={9}
				placeholder="..."
				value={resume}
				onChange={event => setResume(event.target.value)}
			></textarea>
			<div className={styles.buttons}>
				<ButtonBorder title="Back" onClick={onClose} />
				<ButtonMain type="submit" title="Save" />
			</div>
		</form>
	);
};

export default ResumeModal;
