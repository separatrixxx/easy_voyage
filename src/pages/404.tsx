import Head from 'next/head';
import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';


function PageNotFound(): JSX.Element {

	return (
		<>
			<Head>
				<title>{'Easy Voyage - 404'}</title>
			</Head>
			<ErrorPage error={404} />
		</>
	);
}

export default PageNotFound;