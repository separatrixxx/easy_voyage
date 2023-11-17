import { ProfileBlockProps } from './ProfileBlock.props';
import styles from './ProfileBlock.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { SwitchButton } from 'components/MainPageComponents/SwitchButton/SwitchButton';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';


export const ProfileBlock = ({ email, username, image }: ProfileBlockProps): JSX.Element => {
	const router = useRouter();

	const [type, setType] = useState<'data' | 'edit'>('data');

	return (
		<div className={styles.profileBlock}>
			<div className={styles.userInfoDiv}>
				<div className={styles.imageDiv}>
					<Image className={styles.image} draggable='false'
						loader={() => image}
						src={image}
						alt='image'
						width={1}
						height={1}
						unoptimized={true}
						priority={true}
					/>
				</div>
				<div className={styles.userInfo}>
					<Htag tag='l' className={styles.username}>{username}</Htag>
					<Htag tag='m' className={styles.email}>{email}</Htag>
				</div>
			</div>
			<div className={styles.switchButtonsDiv}>
				<SwitchButton text={setLocale(router.locale).personal_data}
					isActive={type === 'data'} onClick={() => setType('data')} />
				<SwitchButton text={setLocale(router.locale).edit_profile}
					isActive={type === 'edit'} onClick={() => setType('edit')} />
			</div>
		</div>
	);
};