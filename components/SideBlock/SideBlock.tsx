import { SideBlockProps } from './SideBlock.props';
import styles from './SideBlock.module.css';
import Image from 'next/image';
import cn from 'classnames';
import { Htag } from 'components/Htag/Htag';


export const SideBlock = ({ side, image, title1, title2, text, btnText }: SideBlockProps): JSX.Element => {
    return (
        <div className={styles.sideBlock}>
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
            <div className={styles.sideDiv}>
                <div className={styles.textDiv}>
                    <Htag tag='l'>{title2}</Htag>
                    <Htag tag='m'>{text}</Htag>
                </div>
            </div>
        </div>
    );
};