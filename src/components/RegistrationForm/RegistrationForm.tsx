import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './registrationFrom.module.scss';
import googleIcon from '../../assets/icons/google.svg';
import ButtonMain from '../Buttons/ButtonMain';

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().min(7, 'має бути принаймні 7 символів').required(),
	})
	.required();

const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = data => console.log(data);

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
						Ім'я <span>*</span>
					</label>
					<input
						className={styles.input}
						type="text"
						{...register('name')}
						placeholder="..."
					/>
					<p className={styles.errorMessage}>{errors.name?.message}</p>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						Електронна адреса <span>*</span>
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
						Пароль <span>*</span>
					</label>
					<input
						className={styles.input}
						type="password"
						{...register('password')}
						placeholder="..."
					/>
					<p className={styles.errorMessage}>{errors.password?.message}</p>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						Підтвердити пароль <span>*</span>
					</label>
					<input
						className={styles.input}
						type="password"
						{...register('password')}
						placeholder="..."
					/>
					<p className={styles.errorMessage}>{errors.password?.message}</p>
				</div>
				<button className={styles.btnSubmit} type="submit">
					Зареєструватися
				</button>
				<Link to="/login" className={styles.loginLink}>
					Вже з нами?
					<span>Увійти</span>
				</Link>
			</form>
		</div>
	);
};

export default RegistrationForm;
