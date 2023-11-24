import { ProfileBlockProps } from './ProfileBlock.props';
import styles from './ProfileBlock.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import cn from 'classnames';


export const ProfileBlock = ({ email, username, image, type }: ProfileBlockProps): JSX.Element => {
	const router = useRouter();

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
					<Htag tag='m' className={styles.username}>{username}</Htag>
					<Htag tag='s' className={styles.email}>{email}</Htag>
					<Htag tag='xs' className={styles.logOut} onClick={() => {
						localStorage.clear();
						router.push('/');
					}}>
						{setLocale(router.locale).log_out}
					</Htag>
				</div>
			</div>
			<div className={cn(styles.buttonsDiv, {
				[styles.buttonsDivOwner]: type === 'owner',
			})}>
				{
					type === 'owner' ?
						<ArrowButton>
							{setLocale(router.locale).verification}
						</ArrowButton>
						:
						<></>
				}
				<ArrowButton isBorder={true}>
					{setLocale(router.locale).edit_profile}
				</ArrowButton>
			</div>
		</div>
	);
};