import styles from './buttonMain.module.scss';

type Props = {
	title: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

const ButtonMain = ({ title, onClick, type = 'button' }: Props) => {
	return (
		<button className={styles.btn} type={type} onClick={onClick}>
			{title}
		</button>
	);
};
export default ButtonMain;
