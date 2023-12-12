import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { uk, enUS } from 'date-fns/esm/locale';
import i18n from '../../../i18n';
import Title from '../Title/Title';
import DatePickerInput from './DatePickerInput/DataPickerInput';
import arrowIcon from '../../../assets/icons/arrow-down-small.svg';
import styles from './trainingForm.module.scss';
import ButtonBorder from '../../../components/Buttons/ButtonBorder/ButtonBorder';

export default function TrainingForm() {
	const [startDate, setStartDate] = useState<null | Date>(null);
	const [endDate, setEndDate] = useState<null | Date>(null);

	const handelSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handelSubmit} className={styles.form}>
			<Title content="Моє тренування" />
			<div className={styles.dataPickerField}>
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					placeholderText="Start"
					minDate={new Date()}
					maxDate={endDate}
					selectsStart
					startDate={startDate}
					endDate={endDate}
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
					selected={endDate}
					onChange={date => setEndDate(date)}
					placeholderText="Finish"
					minDate={startDate || new Date()}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
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

			<ButtonBorder title="Add" type="submit" />
		</form>
	);
}
