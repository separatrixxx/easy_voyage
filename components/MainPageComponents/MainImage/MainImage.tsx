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
				<div className={styles.infoDiv}>
					<Htag tag='xl' className={styles.title}>Easy Voyage</Htag>
					<span className={styles.line} />
					<Htag tag='l' className={styles.text}>
						{setLocale(router.locale).high_quality_resting_platform}
					</Htag>
				</div>
			</div>
		</div>
	);
};