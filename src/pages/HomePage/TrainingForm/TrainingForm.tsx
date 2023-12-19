import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { uk, enUS } from 'date-fns/esm/locale';
import i18n from '../../../i18n';
import Title from '../Title/Title';
import DatePickerInput from './DatePickerInput/DataPickerInput';
import arrowIcon from '../../../assets/icons/arrow-down-small.svg';
import styles from './trainingForm.module.scss';
import OutlineButton from '../../../sharedComponents/Buttons/OutlineButton/OutlineButton';

type Props = {
	startDate: Date | null;
	finishDate: Date | null;
	setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
	setFinishDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

export default function TrainingForm({
	startDate,
	finishDate,
	setStartDate,
	setFinishDate,
}: Props) {
	const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log('submit');
	};

	return (
		<form className={styles.form} id="trainingForm" onSubmit={handelSubmit}>
			<Title content="Моє тренування" />
			<div className={styles.dataPickerField}>
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					placeholderText="Start"
					minDate={new Date()}
					maxDate={finishDate}
					selectsStart
					startDate={startDate}
					endDate={finishDate}
					locale={i18n.language === 'uk' ? uk : enUS}
					dateFormat="dd.MM.yyyy"
					customInput={<DatePickerInput />}
					enableTabLoop={false}
					showPopperArrow={false}
					popperClassName={styles.datePicker}
				/>
			</div>
			<div className={styles.dataPickerField}>
				<DatePicker
					selected={finishDate}
					onChange={date => setFinishDate(date)}
					placeholderText="Finish"
					minDate={startDate || new Date()}
					selectsEnd
					startDate={startDate}
					endDate={finishDate}
					locale={i18n.language === 'uk' ? uk : enUS}
					dateFormat="dd.MM.yyyy"
					customInput={<DatePickerInput />}
					enableTabLoop={false}
					showPopperArrow={false}
					popperClassName={styles.datePicker}
				/>
			</div>

			<div className={styles.bookField}>
				<input
					className={styles.input}
					type="text"
					placeholder="Обрати книги з бібліотеки"
				/>
				<img
					className={styles.icon}
					src={arrowIcon}
					alt="Arrow icon"
					width="13px"
					height="7px"
				/>
			</div>

			<OutlineButton>Add</OutlineButton>
		</form>
	);
}
