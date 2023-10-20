import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import RegistrationInfo from '../components/RegistrationInfo/RegistrationInfo';
import styles from './registrationPage.module.scss';

const RegistrationPage = () => {
	return (
		<div className={styles.flexContainer}>
			<RegistrationForm />
			<RegistrationInfo />
		</div>
	);
};

export default RegistrationPage;
