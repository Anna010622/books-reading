import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InferType } from 'yup';
import ButtonBorder from '../../components/Buttons/ButtonBorder/ButtonBorder';
import styles from './libraryForm.module.scss';

const schema = yup
	.object({
		bookTitle: yup.string().required(),
		author: yup.string().required(),
		year: yup
			.number()
			.typeError('Введіть рік видання')
			.required()
			.min(new Date('1917').getFullYear())
			.max(new Date().getFullYear()),
		pages: yup.number().typeError('Введіть кількість сторінок').required(),
	})
	.required();

type Book = InferType<typeof schema>;

const LibraryFrom = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: Book) => console.log(data);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.field}>
				<label className={styles.label}>Назва книги</label>
				<input
					className={styles.input}
					type="text"
					{...register('bookTitle')}
					placeholder="..."
					required
				/>
				<p className={styles.errorMessage}>{errors.bookTitle?.message}</p>
			</div>
			<div className={styles.field}>
				<label className={styles.label}>Автор книги</label>
				<input
					className={styles.input}
					type="text"
					{...register('author')}
					placeholder="..."
					required
				/>
				<p className={styles.errorMessage}>{errors.author?.message}</p>
			</div>
			<div className={styles.field}>
				<label className={styles.label}>Рік видання</label>
				<input
					className={styles.input}
					type="number"
					{...register('year')}
					placeholder="..."
					required
				/>
				<p className={styles.errorMessage}>{errors.year?.message}</p>
			</div>
			<div className={styles.field}>
				<label className={styles.label}>Кількість сторінок</label>
				<input
					className={styles.input}
					type="number"
					{...register('pages')}
					placeholder="..."
					required
				/>
				<p className={styles.errorMessage}>{errors.pages?.message}</p>
			</div>

			<ButtonBorder title="Додати" />
		</form>
	);
};

export default LibraryFrom;
