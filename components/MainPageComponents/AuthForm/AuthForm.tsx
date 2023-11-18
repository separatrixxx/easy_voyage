import styles from './AuthForm.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { Input } from 'components/Inputs/Input/Input';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';
import { useState } from 'react';
import { AuthButton } from 'components/AuthButton/AuthButton';
import { checkLogin, checkRegistration } from 'helpers/check_auth.helper';
import { SwitchButton } from 'components/MainPageComponents/SwitchButton/SwitchButton';
import { ChangeAuthType } from '../ChangeAuthType/ChangeAuthType';
import { InputWithEye } from 'components/Inputs/InputWithEye/InputWithEye';


export const AuthForm = (): JSX.Element => {
	const router = useRouter();

	const [type, setType] = useState<'login' | 'register'>('login');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [repeatPassword, setRepeatPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [organizationName, setOrganizationName] = useState<string>('');
	const [userType, setUserType] = useState<'guest' | 'owner'>('guest');

	const errType: CheckAuthInterface = {
		errUsername: false,
		errEmail: false,
		errOrganizationName: false,
		errPassword: false,
		errRepeatPassword: false,
	};

	const [error, setError] = useState<CheckAuthInterface>(errType);

	const [loading, setLoading] = useState<boolean>(false);

	const [pswdType, setPswdType] = useState<'password' | 'text'>('password');
	const [repeatPswdType, setRepeatPswdType] = useState<'password' | 'text'>('password');

	if (type === 'login') {
		return (
			<div className={styles.authForm}>
				<ChangeAuthType type={type} setType={setType} />
				<div className={styles.buttonsDiv}>
					<Input type='email' text={setLocale(router.locale).email}
						value={email} error={error.errEmail} eye={false}
						onChange={(e) => setEmail(e.target.value)} />
					<div className={styles.remindDiv}>
						<InputWithEye onMouseEnter={() => setPswdType('text')}
							onMouseLeave={() => setPswdType('password')}>
							<Input type={pswdType} text={setLocale(router.locale).password}
								value={password} error={error.errPassword} eye={false}
								onChange={(e) => setPassword(e.target.value)} />
						</InputWithEye>
						<Htag tag='s' className={styles.remind}>
							{setLocale(router.locale).remind_password}
						</Htag>
					</div>
					<AuthButton text={setLocale(router.locale).log_in} loading={loading}
						onClick={() => checkLogin(email, password, router, setError, setLoading)} />
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.authForm}>
				<ChangeAuthType type={type} setType={setType} />
				<div className={styles.buttonsDiv}>
					<div className={styles.setUserTypeDiv}>
						<SwitchButton text={setLocale(router.locale).book_vacation}
							isActive={userType === 'guest'} onClick={() => setUserType('guest')} />
						<SwitchButton text={setLocale(router.locale).register_hotel}
							isActive={userType === 'owner'} onClick={() => setUserType('owner')} />
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
					
					<InputWithEye onMouseEnter={() => setPswdType('text')}
						onMouseLeave={() => setPswdType('password')}>
						<Input type={pswdType} text={setLocale(router.locale).password}
							value={password} error={error.errPassword} eye={false}
							onChange={(e) => setPassword(e.target.value)} />
					</InputWithEye>
					<InputWithEye onMouseEnter={() => setRepeatPswdType('text')}
						onMouseLeave={() => setRepeatPswdType('password')}>
						<Input type={repeatPswdType} text={setLocale(router.locale).repeat_password}
							value={repeatPassword} error={error.errRepeatPassword} eye={false}
							onChange={(e) => setRepeatPassword(e.target.value)} />
					</InputWithEye>
					<AuthButton text={setLocale(router.locale).register} loading={loading}
						onClick={() => checkRegistration(email, password, repeatPassword, username, organizationName,
						userType, router, setError, setLoading)} />
					<Htag tag='s' className={styles.terms}>
						<span>{setLocale(router.locale).terms}</span>
						{setLocale(router.locale).and}
						<span>{setLocale(router.locale).privacy}</span>
					</Htag>
				</div>
			</div>
		);
	}
};