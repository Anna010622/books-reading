import styles from './goalCard.module.scss';

interface Props {
	title: string;
	number: number;
}
export default function GoalsCard({ title, number }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.numberContainer}>
				<span className={styles.number}>{number}</span>
			</div>
			<h3 className={styles.title}>{title}</h3>
		</div>
	);
}
