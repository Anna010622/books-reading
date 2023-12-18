import { TooltipProps } from 'recharts';
import {
	ValueType,
	NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import styles from './customTooltip.module.scss';

const CustomTooltip = ({
	active,
	payload,
}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltip}>
				{!!payload[0].value && (
					<p className={styles.date}>{payload[0].payload.date}</p>
				)}
				<p className={styles.text} style={{ color: payload[0]?.color }}>
					{payload[0]?.name}: <span>{payload[0]?.value || 0}</span>
				</p>

				<p
					className={styles.text}
					style={{ color: payload[1]?.color || '#FF6B08' }}
				>
					{payload[1]?.name || 'fact'} : <span>{payload[1]?.value || 0}</span>
				</p>
			</div>
		);
	}

	return null;
};

export default CustomTooltip;
