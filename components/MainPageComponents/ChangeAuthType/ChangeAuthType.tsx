import { ChangeAuthTypeProps } from './ChangeAuthType.props';
import styles from './ChangeAuthType.module.css';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Htag } from 'components/Htag/Htag';
import cn from 'classnames';


export const ChangeAuthType = ({ type, setType }: ChangeAuthTypeProps): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.changeAuthTypeDiv}>
			<Htag tag='s' className={cn(styles.changeAuthType, {
				[styles.active]: type === 'login',
			})} onClick={() => setType('login')}>
				{setLocale(router.locale).log_in}
			</Htag>
			<Htag tag='s' className={cn(styles.changeAuthType, {
				[styles.active]: type === 'register',
			})} onClick={() => setType('register')}>
				{setLocale(router.locale).register}
			</Htag>
		</div>
	);
};