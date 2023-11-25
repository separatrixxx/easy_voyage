import { DirectionsItemProps } from './DirectionsItem.props';
import styles from './DirectionsItem.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';


export const DirectionsItem = ({ image, title, text }: DirectionsItemProps): JSX.Element => {
	return (
		<div className={styles.directionsItem}>
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
			<Htag tag='s' className={styles.title}>{title}</Htag>
			{/* <Htag tag='xs' className={styles.text}>{text}</Htag> */}
        </div>
	);
};