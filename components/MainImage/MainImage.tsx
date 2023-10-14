import styles from './MainImage.module.css';
import Image from 'next/image';


export const MainImage = (): JSX.Element => {
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
            </div>
        </div>
    );
};