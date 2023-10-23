import styles from './buttonBorder.module.scss';

type Props = {
	title: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

const ButtonBorder = ({ title, onClick, type = 'button' }: Props) => {
	return (
		<button className={styles.btn} type={type} onClick={onClick}>
			{title}
		</button>
	);
};
export default ButtonBorder;
