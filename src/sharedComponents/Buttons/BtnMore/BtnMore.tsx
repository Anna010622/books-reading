import iconPus from '../../../assets/icons/plus.svg';
import styles from './btnMore.module.scss';

type ButtonProps = React.ComponentProps<'button'> & {
	onClick: () => void;
};

const BtnMore = ({ onClick }: ButtonProps) => {
	return (
		<button className={styles.btn} type="button" onClick={onClick}>
			<img src={iconPus} alt="Icon plus" width="16px" height="16px" />
		</button>
	);
};
export default BtnMore;
