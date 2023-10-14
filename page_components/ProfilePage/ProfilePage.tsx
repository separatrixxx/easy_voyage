import { Htag } from 'components/Htag/Htag';
import styles from './ProfilePage.module.css';
import { Header } from 'components/Header/Header';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';


export const ProfilePage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
			<div className={styles.wrapper}>
				<Header />
				<Htag tag='xl' className={styles.title}>{setLocale(router.locale).profile}</Htag>
			</div>
		</>
	);
};