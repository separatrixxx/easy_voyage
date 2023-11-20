import {ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.css';
import { Htag } from 'components/Htag/Htag';
import { Header } from 'components/Header/Header';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { UserInterface } from 'interfaces/user.interface';
import { Footer } from 'components/Footer/Footer';
import { ProfileBlock } from 'components/ProfilePageComponents/ProfileBlock/ProfileBlock';
import { TabsBlock } from 'components/ProfilePageComponents/TabsBlock/TabsBlock';
import { ProfileHeader } from 'components/ProfilePageComponents/ProfileHeader/ProfileHeader';


export const ProfilePage = ({ user, type }: ProfilePageProps): JSX.Element => {
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
				<ProfileHeader />
				<Header text={setLocale(router.locale).profile} link='/profile' />
				<Htag tag='xl' className={styles.title}>
					{
						type === 'guest' ?
							setLocale(router.locale).profile
						:
							setLocale(router.locale).profile + '. ' + setLocale(router.locale).owner
					}
				</Htag>
				<ProfileBlock email={user.email} username={user.username} image={user.image} type={type} />
				<TabsBlock type={type} />
				<Footer />
			</div>
		</>
	);
};