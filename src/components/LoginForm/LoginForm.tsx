import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import googleIcon from '../../assets/icons/google.svg';
import styles from './loginFrom.module.scss';

type FormData = {
	email: string;
	password: string;
};

const schema = yup
	.object({
		email: yup
			.string()
			.email()
			.required(i18n.t('loginPage.validation.emailRequired')),
		password: yup
			.string()
			.min(7, i18n.t('loginPage.validation.passwordLength'))
			.required(),
	})
	.required();

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { t } = useTranslation('translation', {
		keyPrefix: 'loginPage.form',
	});

	const onSubmit = (data: FormData) => console.log(data);

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<button className={styles.googleBtn}>
					<img
						className={styles.googleIcon}
						src={googleIcon}
						alt="Google icon"
						width="18"
						height="18"
					/>
					<p className={styles.googleTitle}>Google</p>
				</button>

				<div className={styles.field}>
					<label className={styles.label}>
						{t('email')} <span>*</span>
					</label>
					<input
						className={styles.input}
						type="email"
						{...register('email')}
						placeholder="your@email.com"
					/>
					<p className={styles.errorMessage}>{errors.email?.message}</p>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						{t('password')} <span>*</span>
					</label>
					<input
						className={styles.input}
						type="password"
						{...register('password')}
						placeholder={t('password')}
					/>
					<p className={styles.errorMessage}>{errors.password?.message}</p>
				</div>

				<button className={styles.btnSubmit} type="submit">
					{t('login')}
				</button>
				<Link to="/registration" className={styles.registrationLink}>
					{t('register')}
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
