import { HomePageProps } from './HomePage.props';
import styles from './HomePage.module.css';
import { Header } from 'components/Header/Header';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Footer } from 'components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { ProfileHeader } from 'components/ProfilePageComponents/ProfileHeader/ProfileHeader';
import { Htag } from 'components/Htag/Htag';
import { DirectionsBlock } from 'components/MainPageComponents/DirectionsBlock/DirectionsBlock';
import { BookHotelBlock } from 'components/HomePageComponents/BookHotelBlock/BookHotelBlock';


export const HomePage = ({ type }: HomePageProps): JSX.Element => {
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
                <Header text={setLocale(router.locale).profile} link='/profile' />
                <ProfileHeader />
                <Htag tag='xl' className={styles.title}>
                    {setLocale(router.locale).book_hotel}
                </Htag>
                {
                    type === 'guest' ?
                        <BookHotelBlock />
                        :
                        setLocale(router.locale).profile + '. ' + setLocale(router.locale).owner
                }
                <DirectionsBlock />
                <Footer />
            </div>
        </>
    );
};