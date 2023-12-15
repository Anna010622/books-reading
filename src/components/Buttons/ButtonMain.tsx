import React from 'react';
import styles from './buttonMain.module.scss';

type ButtonProps = React.ComponentProps<'button'> & {
	children: string;
};

const ButtonMain = ({ children, ...rest }: ButtonProps) => {
	return (
		<button className={styles.btn} {...rest}>
			{children}
		</button>
	);
};
export default ButtonMain;
