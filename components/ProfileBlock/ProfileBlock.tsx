import { AuthButtonProps } from './AuthButton.props';
import styles from './AuthButton.module.css';


export const ProfileBlock = ({ text, onClick }: ProfileBlockProps): JSX.Element => {
	return (
		<button className={styles.authButton} onClick={onClick}>
			{text}
		</button>
	);
};