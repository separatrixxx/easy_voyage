import { AuthForm } from 'components/AuthForm/AuthForm';
import styles from './AuthPage.module.css';
import { Header } from 'components/Header/Header';
import { Toaster } from 'react-hot-toast';


export const AuthPage = (): JSX.Element => {
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
                <Header />
                <AuthForm />
            </div>
        </>
    );
};