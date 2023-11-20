import { TabProps } from './Tab.props';
import styles from './Tab.module.css';
import { Htag } from 'components/Htag/Htag';
import Arrow from './arrow.svg';
import { motion } from 'framer-motion'


export const Tab = ({ title, text, flag, setFlag }: TabProps): JSX.Element => {
	const variants = {
		active: {
			transform: 'rotate(90deg)',
		},
		passive: {
			transform: 'rotate(0deg)',
		}
	};

	const variantsSecond = {
		active: {
			display: 'grid',
			padding: '20px 0',
		},
		passive: {
			display: 'none',
			padding: '0',
		}
	};

	return (
		<div className={styles.mapTabs}>
			<div className={styles.arrowDiv} onClick={() => setFlag(!flag)}>
				<Htag tag='s' className={styles.tabItem}>{title}</Htag>
				<motion.span className={styles.arrow}
					variants={variants}
					initial={flag ? 'active' : 'passive'}
					transition={{ duration: 0.3 }}
					animate={flag ? 'active' : 'passive'}>
					<Arrow />
				</motion.span>
			</div>
			<motion.div variants={variantsSecond}
				initial={flag ? 'active' : 'passive'}
				transition={{ duration: 0.3 }}
				animate={flag ? 'active' : 'passive'}>
				<Htag tag='s'>{title}</Htag>
			</motion.div>
			<div className={styles.line} />
		</div>
	);
};