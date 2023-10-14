import styles from './HomePage.module.css';
import { Header } from 'components/Header/Header';
import { MainImage } from 'components/MainImage/MainImage';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { SideBlock } from 'components/SideBlock/SideBlock';


export const HomePage = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <Header />
            <MainImage />
            <Htag tag='xl' className={styles.title}>{setLocale(router.locale).touchpoint}</Htag>
            {/* <SideBlock side='left' image='/SideImage1.webp' title1={setLocale(router.locale).for_holidaymaker}
                title2={setLocale(router.locale).new_level_of_comfort} text={setLocale(router.locale).touchpointText1}
                btnText={setLocale(router.locale).try_it_out} /> */}
        </div>
    );
};