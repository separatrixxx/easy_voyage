import { Htag } from 'components/Htag/Htag';
import styles from './AuthForm.module.css';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Input } from 'components/Input/Input';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';
import { useState } from 'react';
import { AuthButton } from 'components/AuthButton/AuthButton';
import { checkLogin, checkRegistration } from 'helpers/check_auth.helper';
import cn from 'classnames';


export const AuthForm = (): JSX.Element => {
	const router = useRouter();

	const [type, setType] = useState<'login' | 'register'>('login');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [organizationName, setOrganizationName] = useState<string>('');
	const [userType, setUserType] = useState<'guest' | 'owner'>('guest');

	const errType: CheckAuthInterface = {
		errUsername: false,
		errEmail: false,
		errOrganizationName: false,
		errPassword: false,
	};

	const [error, setError] = useState<CheckAuthInterface>(errType);


	if (type === 'login') {
		return (
			<div className={styles.authForm}>
				<Htag tag='xl' className={styles.text}>{setLocale(router.locale).authorization}</Htag>
				<Input type='email' text={setLocale(router.locale).email}
					value={email} error={error.errEmail} eye={false}
					onChange={(e) => setEmail(e.target.value)} />
				<Input type='password' text={setLocale(router.locale).password}
					value={password} error={error.errPassword} eye={false}
					onChange={(e) => setPassword(e.target.value)} />
				<AuthButton text={setLocale(router.locale).log_in} onClick={() => checkLogin(email, password, router.locale, setError)} />
				<Htag tag='xs'>{setLocale(router.locale).dont_have_account + ' '}
					<span className={styles.span} onClick={() => setType('register')}>
						{setLocale(router.locale).register}
					</span>
				</Htag>
			</div>
		);
	} else {
		return (
			<div className={styles.authForm}>
				<Htag tag='xl' className={styles.text}>{setLocale(router.locale).registration}</Htag>
				<div className={styles.setUserTypeDiv}>
					<button className={cn(styles.userTypeBtn, {
						[styles.active]: userType === 'guest',
					})} onClick={() => setUserType('guest')}>
						{setLocale(router.locale).book_vacation}
					</button>
					<button className={cn(styles.userTypeBtn, {
						[styles.active]: userType === 'owner',
					})} onClick={() => setUserType('owner')}>
						{setLocale(router.locale).register_hotel}
					</button>
				</div>
				<Input type='text' text={setLocale(router.locale).full_name}
					value={username} error={error.errUsername} eye={false}
					onChange={(e) => setUsername(e.target.value)} />
				<Input type='email' text={setLocale(router.locale).email}
					value={email} error={error.errEmail} eye={false}
					onChange={(e) => setEmail(e.target.value)} />
				{userType === 'owner' ?
					<Input type='text' text={setLocale(router.locale).organization_name}
						value={organizationName} error={error.errOrganizationName} eye={false}
						onChange={(e) => setOrganizationName(e.target.value)} />
					: <></>}
				<Input type='password' text={setLocale(router.locale).password}
					value={password} error={error.errPassword} eye={false}
					onChange={(e) => setPassword(e.target.value)} />
				<AuthButton text={setLocale(router.locale).register} onClick={() => checkRegistration(email, password, username, organizationName, userType, router.locale, setError)} />
				<Htag tag='xs'>{setLocale(router.locale).already_have_account + ' '}
					<span className={styles.span} onClick={() => setType('login')}>
						{setLocale(router.locale).log_in}
					</span>
				</Htag>
			</div>
		);
	}
};