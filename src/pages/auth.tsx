import { AuthPage } from "page_components/AuthPage/AuthPage";
import Head from 'next/head';


function Auth(): JSX.Element {
  return (
    <>
        <Head>
            <title>Easy Voyage</title>
        </Head>
        <AuthPage />
    </>
  );
}

export default Auth;