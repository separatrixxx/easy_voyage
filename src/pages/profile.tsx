import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { UserInterface } from "interfaces/user.interface";
import { useEffect, useState } from 'react';
import { pageHelper } from 'helpers/pages.helper';


function Profile(): JSX.Element {
	const router = useRouter();

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [userType, setUserType] = useState<'guest' | 'owner'>('guest');

	const user: UserInterface = {
		id: 0,
		username: username,
		email: email,
		image: '/UserImage.webp',
		type: userType,
		age: 20,
		registrationTime: '16/11/2023',
	};

	const [isAuth, setIsAuth] = useState<boolean>(false);

	useEffect(() => {
		pageHelper(router, setIsAuth, setUsername, setEmail, setUserType);
	}, [router]);

	if (isAuth) {
		return (
			<>
				<Head>
					<title>{'Easy Voyage - ' + setLocale(router.locale).profile}</title>
				</Head>
				<ProfilePage user={user} type={userType} />
			</>
		);
	} else {
		return (
			<></>
		);
	}
}

export default Profile;