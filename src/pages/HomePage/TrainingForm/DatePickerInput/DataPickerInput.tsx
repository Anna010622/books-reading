import React, { forwardRef } from 'react';
import calendarIcon from '../../../../assets/icons/calendar.svg';
import arrowIcon from '../../../../assets/icons/arrow-down-small.svg';
import styles from './dataPickerInput.module.scss';

const DatePickerInput = forwardRef(
	(
		{
			value,
			onClick,
			onChange,
			placeholder,
		}: React.HTMLProps<HTMLInputElement>,
		ref: React.Ref<HTMLInputElement>
	) => {
		return (
			<div className={styles.field} onClick={onClick} ref={ref}>
				<img
					src={calendarIcon}
					alt="Calendar icon"
					width="17px"
					height="17px"
				/>
				<input
					className={styles.input}
					type="text"
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>

				<img src={arrowIcon} alt="Arrow icon" width="13px" height="7px" />
			</div>
		);
	}
);

export default DatePickerInput;
