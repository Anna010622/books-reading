import styles from './loginInfo.module.scss';

const LoginInfo = () => {
	return (
		<div className={styles.loginInfo}>
			<p className={styles.quote}>
				Книги – це кораблі думки, що мандрують по хвилях часу і обережно несуть
				свій дорогоцінний вантаж від покоління до покоління.
			</p>
			<p className={styles.author}>Бэкон Ф.</p>
		</div>
	);
};

export default LoginInfo;
