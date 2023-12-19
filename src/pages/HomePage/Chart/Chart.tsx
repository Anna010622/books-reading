import {
	LineChart,
	Line,
	ResponsiveContainer,
	XAxis,
	Tooltip,
	CartesianGrid,
	YAxis,
} from 'recharts';

import {
	eachDayOfInterval,
	isSameDay,
	parseISO,
	format,
	differenceInCalendarDays,
} from 'date-fns';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import { type Book, type Statistics } from '../HomePage';
import styles from './chart.module.scss';

type Props = {
	startDate: Date | null;
	finishDate: Date | null;
	books: Book[];
	statistics: Statistics[];
	trainingDuration: number;
};
export default function Chart({
	startDate,
	finishDate,
	books,
	statistics,
	trainingDuration,
}: Props) {
	const totalPages = books.reduce((total, book) => book.pages + total, 0);

	const pagesPerDay =
		totalPages > 0 && trainingDuration > 0
			? Math.ceil(totalPages / trainingDuration)
			: 0;

	const statisticTraining = statistics.reduce(
		(acc: { date: string; pages: number }[], item, index, array) => {
			if (isSameDay(parseISO(item.date), parseISO(array[index - 1]?.date))) {
				acc[index - 1] = {
					date: item.date,
					pages: item.pages + array[index - 1]?.pages,
				};
				return acc;
			} else {
				acc.push(item);
				return acc;
			}
		},
		[]
	);

	let days = [];
	if (typeof startDate === 'string' && typeof finishDate === 'string') {
		days = eachDayOfInterval({
			start: parseISO(startDate),
			end: parseISO(finishDate),
		});
	} else if (startDate !== null && finishDate !== null) {
		days = eachDayOfInterval({
			start: startDate,
			end: finishDate,
		});
	} else {
		days = eachDayOfInterval({
			start: new Date(),
			end: new Date(),
		});
	}

	const planTrainingDates = days.map(day => format(day, 'yyyy-MM-dd'));

	const data = planTrainingDates.map(item => {
		const elementWithTheSameDate = statisticTraining.find(
			statistic => statistic.date === item
		);
		if (elementWithTheSameDate) {
			return {
				pagesPerDay: pagesPerDay,
				date: item,
				pages: elementWithTheSameDate.pages,
			};
		} else if (
			differenceInCalendarDays(
				parseISO(statisticTraining[statisticTraining.length - 1]?.date),
				parseISO(item)
			) > 0
		) {
			return {
				pagesPerDay: pagesPerDay,
				date: item,
				pages: 0,
			};
		} else {
			return {
				pagesPerDay: pagesPerDay,
				date: item,
			};
		}
	});

	return (
		<div className={styles.chartWrapper}>
			<p className={styles.amount}>
				Amount of pages / day
				<span className={styles.pages}>{pagesPerDay || 0}</span>
			</p>
			<ResponsiveContainer height={340}>
				<LineChart data={data}>
					<CartesianGrid
						width={1}
						fill="#B1B5C2"
						verticalCoordinatesGenerator={
							trainingDuration > 0
								? undefined
								: props => {
										return props.width >= 818
											? [...Array(Math.ceil(props.width / 135))].map(
													(_, index, array) => {
														if (array.length - 1 === index) {
															return props.width - 5;
														} else {
															return 5 + index * 135;
														}
													}
											  )
											: props.width >= 606
											? [...Array(Math.ceil(props.width / 121))].map(
													(_, index, array) => {
														if (array.length - 1 === index) {
															return props.width - 5;
														} else {
															return 5 + index * 121;
														}
													}
											  )
											: [5, props.width - 5];
								  }
						}
					/>
					<Line
						type="monotone"
						dataKey="pages"
						stroke="#FF6B08"
						strokeWidth={2}
						filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
						dot={
							trainingDuration > 0
								? { fill: '#FF6B08' }
								: { fill: 'transparent', stroke: 'transparent' }
						}
						name="fact"
						connectNulls
						activeDot={trainingDuration > 0 ? true : false}
					></Line>

					<Line
						type="monotone"
						dataKey="pagesPerDay"
						stroke="#091E3F"
						strokeWidth={2}
						filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
						dot={
							trainingDuration > 0
								? { fill: '#091E3F' }
								: {
										fill: 'transparent',
										stroke: 'transparent',
								  }
						}
						activeDot={trainingDuration > 0 ? true : false}
						name="plan"
						connectNulls
					></Line>

					<Tooltip
						active={true}
						cursor={false}
						content={<CustomTooltip />}
						position={trainingDuration > 0 ? undefined : { x: 0, y: 0 }}
						coordinate={trainingDuration > 0 ? undefined : { x: 0, y: 0 }}
					/>

					<YAxis tickLine={false} axisLine={{ stroke: '#B1B5C2' }} width={1} />
					<XAxis
						dataKey="date"
						height={1}
						tickLine={false}
						minTickGap={121}
						axisLine={{ stroke: '#B1B5C2' }}
					/>
				</LineChart>
			</ResponsiveContainer>
			<p className={styles.time}>Time</p>
		</div>
	);
}
