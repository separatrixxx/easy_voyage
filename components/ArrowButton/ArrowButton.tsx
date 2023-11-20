import { ArrowButtonProps } from './ArrowButton.props';
import styles from './ArrowButton.module.css';
import Arrow from './arrow.svg';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const ArrowButton = ({ children, link, isBorder, setActive }: ArrowButtonProps): JSX.Element => {
	const router = useRouter();

	return (
		<button className={cn(styles.button, {
			[styles.buttonBorder]: isBorder,
		})} onClick={() => setActive ? setActive(true) : router.push('/' + link)}>
			{children}
			<span className={styles.arrow}>
				<Arrow />
			</span>
		</button>
	);
};