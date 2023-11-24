import { Input } from 'components/Inputs/Input/Input';
import styles from './BookForm.module.css';;
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useState } from 'react';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';


export const BookForm = (): JSX.Element => {
	const router = useRouter();

	const [city, setCity] = useState<string>('');
	const [adults, setAdults] = useState<number>(0);
	const [children, setChildren] = useState<number>(0);

	return (
		<div className={styles.bookForm}>
			<Input type='text' text={setLocale(router.locale).city}
				value={city} eye={false}
				onChange={(e) => setCity(e.target.value)} />
			<Input type='number' text={setLocale(router.locale).adults}
				value={adults} eye={false}
				onChange={(e) => setAdults(+e.target.value)} />
			<Input type='number' text={setLocale(router.locale).children}
				value={children} eye={false}
				onChange={(e) => setChildren(+e.target.value)} />
			<ArrowButton>
				{setLocale(router.locale).find_a_hotel}
			</ArrowButton>
		</div>
	);
};