import { PartnerItemProps } from './PartnerItem.props';
import styles from './PartnerItem.module.css';
import { Htag } from 'components/Htag/Htag';
import Image from 'next/image';


export const PartnerItem = ({ title, address, image }: PartnerItemProps): JSX.Element => {
	return (
		<div className={styles.partnerDiv}>
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
			<Htag tag='m' className={styles.title}>{title}</Htag>
			<Htag tag='s'>{address}</Htag>
		</div>
	);
};