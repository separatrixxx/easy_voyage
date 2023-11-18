import { MainInfoBlockProps } from './MainInfoBlock.props';
import styles from './MainInfoBlock.module.css';
import { Htag } from 'components/Htag/Htag';


export const MainInfoBlock = ({ content }: MainInfoBlockProps): JSX.Element => {
	return (
		<div className={styles.infoBlock}>
			{content.map(c => (
				<div key={c.title} className={styles.infoItem}>
                    <span className={styles.icon}><c.icon /></span>
                    <Htag tag='s' className={styles.title}>{c.title}</Htag>
                    <Htag tag='xs' className={styles.text}>{c.text}</Htag>
                </div>
			))}
		</div>
	);
};