import styles from './ProfileHeader.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Htag } from 'components/Htag/Htag';


export const ProfileHeader = (): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.profileHeader}>
            <Htag tag='s' className={styles.profileHeaderText}>
                {setLocale(router.locale).to_main}
            </Htag>
            <Htag tag='s' className={styles.profileHeaderText}>
                {setLocale(router.locale).help}
            </Htag>
        </div>
	);
};