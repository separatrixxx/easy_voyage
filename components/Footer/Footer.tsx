import { Htag } from 'components/Htag/Htag';
import styles from './Footer.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { LocaleChange } from 'components/LocaleChange/LocaleChange';
import { format } from 'date-fns';


export const Footer = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.footer}>
            <div className={styles.footerLinks}>
                <div className={styles.linksDiv}>
                    <Htag tag='s' className={styles.title}>{setLocale(router.locale).company}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).about}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).partners}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).terms}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).privacy}</Htag>
                </div>
                <div className={styles.linksDiv}>
                    <Htag tag='s' className={styles.title}>{setLocale(router.locale).help}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).customer_support}</Htag>
                    <Htag tag='s' className={styles.link}>{setLocale(router.locale).technical_support}</Htag>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.copyrightDiv}>
                    <Htag tag='xs' className={styles.rightsReserved}>
                        {'© 2023 - ' + format(new Date(), 'yyyy') + ' GEMUANI Ltd. ' + setLocale(router.locale).all_rights_reserved}
                    </Htag>
                    <LocaleChange />
                </div>
                <Htag tag='xs' className={styles.by}>by separatrix</Htag>
            </div>
        </div>
	);
};