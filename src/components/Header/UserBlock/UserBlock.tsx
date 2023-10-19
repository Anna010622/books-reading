import styles from './userBlock.module.scss';

const UserBlock = () => {
	return (
		<div className={styles.userBlock}>
			<div className={styles.user}>
				<div className={styles.userIcon}>
					<p className={styles.iconText}>U</p>
				</div>
				<p className={styles.userName}>UserName</p>
			</div>

			<button className={styles.exit}>Вихід</button>
		</div>
	);
};

export default UserBlock;
