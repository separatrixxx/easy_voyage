import { SideBlockProps } from './SideBlock.props';
import styles from './SideBlock.module.css';
import Image from 'next/image';
import { Htag } from 'components/Htag/Htag';
import { SwitchButton } from 'components/SwitchButton/SwitchButton';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const SideBlock = ({ side, image, title1, title2, text, btnText }: SideBlockProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <Htag tag='l' className={cn(styles.title1Text, {
                [styles.title1TextRight]: side === 'right',
            })}>{title1}</Htag>
            <div className={cn(styles.sideBlock, {
                [styles.sideBlockRight]: side === 'right',
            })}>
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
                <div className={cn(styles.sideDiv, {
                    [styles.sideDivRight]: side === 'right',
                })}>
                    <div className={styles.textDiv}>
                        <Htag tag='l'>{title2}</Htag>
                        <Htag tag='m'>{text}</Htag>
                    </div>
                    <SwitchButton text={btnText} isActive={false} onClick={() => router.push('/auth')} />
                </div>
            </div>
        </div>
    );
};