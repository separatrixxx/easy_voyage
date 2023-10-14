import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Htag } from 'components/Htag/Htag';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeW } from 'hooks/useResize';
import { motion } from 'framer-motion';
import { BurgerMenu } from 'components/BurgerMenu/BurgenMenu';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import cn from 'classnames';


export const Header = ({ text, link }: HeaderProps): JSX.Element => {
    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false);
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);

    const scrollPosition = useScrollY();
    const width = useResizeW();

    if (scrollPosition - lastScroll >= 200 && scrollPosition > lastScroll) {
        setOpen(false);
        setFlag(true);
        setLastScroll(scrollPosition);
    } else if (scrollPosition < lastScroll) {
        setFlag(false);
        setLastScroll(scrollPosition);
    }

    const variants = {
        visible: {
            transform: 'translate(0%, 0%)',
        },
        hidden: {
            transform: 'translate(0%, -100%)',
        }
    };

    const variantsBlock = {
        visible: {
            height: 'fit-content',
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            }
        }
    };

    if (width > 1024) {
        variantsBlock.visible.transition.duration = 0;
        variantsBlock.hidden.transition.duration = 0;
    }

    return (
        <motion.header className={styles.header}
            variants={variants}
            initial={flag ? 'hidden' : 'visible'}
            transition={{ duration: 0.3 }}
            animate={flag ? 'hidden' : 'visible'}>
            <Link href='/about'>
                <Htag tag='s' className={styles.link}>{setLocale(router.locale).about}</Htag>
            </Link>
            <Link href='/'>
                <Htag tag='s' className={cn(styles.link, styles.logo)}>EV</Htag>
            </Link>
            <Link href={link} className={styles.link}>
                <Htag tag='s' className={styles.link}>{text}</Htag>
            </Link>
        </motion.header>
    );
};