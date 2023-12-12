import styles from './title.module.scss';

interface Props {
	content: string;
}

export default function Title({ content }: Props) {
	return <h2 className={styles.title}>{content}</h2>;
}
