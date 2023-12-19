import LoginForm from './LoginForm/LoginForm';
import LoginInfo from './LoginInfo/LoginInfo';
import styles from './loginPage.module.scss';

const LoginPage = () => {
	return (
		<div className={styles.pageContainer}>
			<LoginForm />
			<LoginInfo />
		</div>
	);
};

export default LoginPage;
