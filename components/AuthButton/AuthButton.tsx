import { AuthButtonProps } from './AuthButton.props';
import styles from './AuthButton.module.css';
import { LoadingDots } from 'components/LoadingDots/LoadingDots';
import cn from 'classnames';


export const AuthButton = ({ text, loading, onClick }: AuthButtonProps): JSX.Element => {
	if (!loading) {
		return (
			<button className={styles.authButton} onClick={onClick}>
				{text}
			</button>
		);
	} else {
		return (
			<button className={cn(styles.authButton, styles.button_loading)}>
				<LoadingDots />
			</button>
		);
	}
};