import { Htag } from 'components/Htag/Htag';
import styles from './MainImage.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { AuthButton } from 'components/AuthButton/AuthButton';


export const MainImage = (): JSX.Element => {
	const router = useRouter();

	const image = '/MainImage.webp';

	return (
		<div className={styles.mainImage}>
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
				<div className={styles.titleDiv}>
					<span className={styles.line} />
					<Htag tag='xxl' className={styles.title}>
						{setLocale(router.locale).main_title}
					</Htag>
					<span className={styles.line} />
				</div>
				<div className={styles.infoDiv}>
					<Htag tag='m' className={styles.text}>
						{setLocale(router.locale).platform_number_1}
					</Htag>
					<AuthButton text={setLocale(router.locale).register} onClick={() => router.push('/auth')} />
				</div>
			</div>
		</div>
	);
};