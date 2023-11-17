import styles from './AuthPage.module.css';
import { AuthForm } from 'components/MainPageComponents/AuthForm/AuthForm';
import { Header } from 'components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export const AuthPage = (): JSX.Element => {
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
                <Header text={setLocale(router.locale).log_in} link='/auth' />
                <AuthForm />
            </div>
        </>
    );
};