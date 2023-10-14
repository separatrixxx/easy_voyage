import { AuthPage } from "page_components/AuthPage/AuthPage";
import Head from 'next/head';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


function Auth(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{'Easy Voyage - ' + setLocale(router.locale).auth}</title>
      </Head>
      <AuthPage />
    </>
  );
}

export default Auth;