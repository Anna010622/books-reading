import RegistrationForm from './RegistrationForm/RegistrationForm';
import RegistrationInfo from './RegistrationInfo/RegistrationInfo';
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
