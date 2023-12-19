import styles from './outlineButton.module.scss';

type ButtonProps = React.ComponentProps<'button'> & {
	children: string;
};

const OutlineButton = ({ children, ...rest }: ButtonProps) => {
	return (
		<button className={styles.btn} {...rest}>
			{children}
		</button>
	);
};
export default OutlineButton;
