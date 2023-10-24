import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import React, { MouseEvent } from 'react';
import styles from './modalOverlay.module.scss';

type Props = {
	children: React.ReactElement;
	close: () => void;
	className?: string;
};

interface KeyboardEvent {
	code: string;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const ModalOverlay = ({ children, close, className }: Props) => {
	const onEscapeClick = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			close();
		}
	};

	const onOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			close();
		}
	};

	useEffect(() => {
		document.body.addEventListener('keydown', onEscapeClick);
		document.body.classList.add('noScroll');

		return () => {
			document.body.removeEventListener('keydown', onEscapeClick);
			document.body.classList.remove('noScroll');
		};
	});

	return createPortal(
		<div
			className={className ? `${styles.overlay} withoutBg` : styles.overlay}
			onClick={onOverlayClick}
		>
			{children}
		</div>,
		modalRoot
	);
};

export default ModalOverlay;
