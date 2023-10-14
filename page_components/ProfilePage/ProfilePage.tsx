import { Htag } from 'components/Htag/Htag';
import styles from './ProfilePage.module.css';
import { Header } from 'components/Header/Header';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { UserInterface } from 'interfaces/user.interface';
import { ProfileBlock } from 'components/ProfileBlock/ProfileBlock';


export const ProfilePage = (): JSX.Element => {
	const router = useRouter();

	const user: UserInterface = {
		username: 'Александра Ерина',
		email: 'alex355@untitledui.com',
		image: 'UserImage.webp',
	}

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
				<Header text={setLocale(router.locale).profile} link='/profile' />
				<Htag tag='xl' className={styles.title}>{setLocale(router.locale).profile}</Htag>
				<ProfileBlock email={user.email} username={user.username} image={user.image} />
			</div>
		</>
	);
};