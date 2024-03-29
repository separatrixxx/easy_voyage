import styles from './MainPage.module.css';
import { Header } from 'components/Header/Header';
import { MainImage } from 'components/MainPageComponents/MainImage/MainImage';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { AuthForm } from 'components/MainPageComponents/AuthForm/AuthForm';
import { Footer } from 'components/Footer/Footer';
import { Htag } from 'components/Htag/Htag';
import { clientContent, partnerContent } from 'helpers/info_content.helper';
import { MainInfoBlock } from 'components/MainPageComponents/MainInfoBlock/MainInfoBlock';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import { DirectionsBlock } from 'components/MainPageComponents/DirectionsBlock/DirectionsBlock';
import { Toaster } from 'react-hot-toast';


export const MainPage = (): JSX.Element => {
    const router = useRouter();

    const [active, setActive] = useState<boolean>(false);

    const clientsContent = clientContent(router);
    const partnersContent = partnerContent(router);

    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <Modal active={active} setActive={setActive}>
                <AuthForm />
            </Modal>
            <div className={styles.wrapper}>
                <Header text={setLocale(router.locale).log_in} setActive={setActive} />
                <MainImage />
                <Htag tag='l' className={styles.forText}>
                    {setLocale(router.locale).for_clients}
                </Htag>
                <MainInfoBlock content={clientsContent} />
                <ArrowButton setActive={setActive}>
                    {setLocale(router.locale).book_vacation}
                </ArrowButton>
                <DirectionsBlock />
                <Htag tag='l' className={styles.forText}>
                    {setLocale(router.locale).for_partners}
                </Htag>
                <MainInfoBlock content={partnersContent} />
                <ArrowButton setActive={setActive}>
                    {setLocale(router.locale).register_hotel}
                </ArrowButton>
                <Footer />
            </div>
        </>
    );
};