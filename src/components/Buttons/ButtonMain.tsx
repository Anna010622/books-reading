import styles from './buttonMain.module.scss';

type Props = {
	title: string;
	width?: string;
	height?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

const ButtonMain = ({
	title,
	width = '100%',
	height,
	onClick,
	type = 'button',
}: Props) => {
	return (
		<button
			className={styles.btn}
			style={{ width: `${width}`, height: `${height}` }}
			type={type}
			onClick={onClick}
		>
			{title}
		</button>
	);
};
export default ButtonMain;
