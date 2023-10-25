import { useTranslation } from 'react-i18next';
import styles from './langSwitch.module.scss';

const LangSwitch = () => {
	const { t, i18n } = useTranslation();

	const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(event.target.value);
	};
	return (
		<select
			className={styles.select}
			onChange={handleSelect}
			defaultValue={i18n.language}
		>
			<option className={styles.option} value="uk">
				UK
			</option>
			<option className={styles.option} value="en">
				EN
			</option>
		</select>
	);
};

export default LangSwitch;
