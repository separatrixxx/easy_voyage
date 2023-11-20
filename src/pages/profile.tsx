import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { UserInterface } from "interfaces/user.interface";


function Profile(): JSX.Element {
	const router = useRouter();

	const user: UserInterface = {
		id: 0,
		username: 'Александра Ерина',
		email: 'alex355@untitledui.com',
		image: '/UserImage.webp',
		type: 'guest',
		age: 20,
		registrationTime: '16/11/2023',
	}

	return (
		<>
			<Head>
				<title>{'Easy Voyage - ' + setLocale(router.locale).profile}</title>
			</Head>
			<ProfilePage user={user} type="owner" />
		</>
	);
}

export default Profile;