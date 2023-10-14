import { AuthButtonProps } from './AuthButton.props';
import styles from './AuthButton.module.css';


export const AuthButton = ({ text, onClick }: AuthButtonProps): JSX.Element => {
	return (
		<button className={styles.authButton} onClick={onClick}>
			{text}
		</button>
	);
};