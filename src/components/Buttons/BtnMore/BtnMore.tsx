import iconPus from '../../../assets/icons/plus.svg';
import styles from './btnMore.module.scss';

type Props = {
	onClick: () => void;
};

const BtnMore = ({ onClick }: Props) => {
	return (
		<button className={styles.btn} type="button" onClick={onClick}>
			<img src={iconPus} alt="Icon plus" width="16px" height="16px" />
		</button>
	);
};
export default BtnMore;
