import { IoStarOutline } from 'react-icons/io5';
import styles from './rating.module.scss';

type Props = {
	rating: number;
	hover?: number | null;
	setRating?: (currentRating: number) => void;
	setHover?: (currentRating: number | null) => void;
};

const Rating = ({ rating, hover, setRating, setHover }: Props) => {
	return (
		<div className={styles.rating}>
			{[...Array(5)].map((_, index) => {
				const currentRating = index + 1;
				const iconClassName =
					(rating > 0 && currentRating <= rating) ||
					(hover !== null && hover && currentRating <= hover)
						? `${styles.icon} fill`
						: styles.icon;

				return (
					<label key={index}>
						<input
							type="radio"
							name="rating"
							value={currentRating}
							onClick={() => {
								if (setRating) {
									setRating(currentRating);
								}
							}}
						/>
						<IoStarOutline
							className={iconClassName}
							color={
								rating > 0 || (hover && hover >= currentRating)
									? '#FF6B08'
									: '#A6ABB9'
							}
							onMouseEnter={() => {
								if (setHover) setHover(currentRating);
							}}
							onMouseLeave={() => {
								if (setHover) setHover(null);
							}}
						/>
					</label>
				);
			})}
		</div>
	);
};

export default Rating;
