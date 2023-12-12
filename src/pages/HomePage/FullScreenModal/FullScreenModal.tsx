import React from 'react';
import styles from './fullScreenModal.module.scss';
import iconArrow from '../../../assets/icons/arrow-back.svg';

interface Props {
	closeModal: () => void;
	children: React.ReactElement;
}

export default function FullScreenModal({ closeModal, children }: Props) {
	return (
		<div className={styles.modal__form_training}>
			<button className={styles.btn} onClickCapture={closeModal}>
				<img src={iconArrow} alt="Icon arrow back" width="24px" height="12px" />
			</button>
			{children}
		</div>
	);
}
