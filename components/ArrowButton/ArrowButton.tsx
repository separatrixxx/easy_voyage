import { ArrowButtonProps } from './ArrowButton.props';
import styles from './ArrowButton.module.css';
import Arrow from './arrow.svg';
import { useRouter } from 'next/router';


export const ArrowButton = ({ children, link, setActive }: ArrowButtonProps): JSX.Element => {
	const router = useRouter();

	return (
		<button className={styles.button} onClick={() => setActive ? setActive(true) : router.push('/' + link)}>
			{children}
			<span className={styles.arrow}>
				<Arrow />
			</span>
		</button>
	);
};