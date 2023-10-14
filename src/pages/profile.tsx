import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


function Profile(): JSX.Element {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{'Easy Voyage - ' + setLocale(router.locale).profile}</title>
			</Head>
			<ProfilePage />
		</>
	);
}

export default Profile;