import Head from 'next/head';
import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';


function PageServerFailure(): JSX.Element {
	return (
		<>
			<Head>
				<title>{'tBench - 500'}</title>
			</Head>
			<ErrorPage error={500} />
		</>
	);
}

export default PageServerFailure;