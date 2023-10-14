import styles from './AuthPage.module.css';
import { Header } from 'components/Header/Header';
import { useRouter } from 'next/router';


export const AuthPage = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.wrapper}>
            <Header />
        </div>
    );
};