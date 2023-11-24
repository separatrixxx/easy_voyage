import { BookForm } from '../BookForm/BookForm';
import styles from './BookHotelBlock.module.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const BookHotelBlock = (): JSX.Element => {
	type ValuePiece = Date | null;
	type Value = ValuePiece | [ValuePiece, ValuePiece];

	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className={styles.bookHotelBlock}>
			<BookForm />
			<Calendar className={styles.calendar} onChange={onChange} value={value} />
		</div>
	);
};