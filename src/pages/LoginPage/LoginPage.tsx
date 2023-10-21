import LoginForm from '../../components/LoginForm/LoginForm';
import LoginInfo from '../../components/LoginInfo/LoginInfo';
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
