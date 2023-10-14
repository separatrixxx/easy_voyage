import { SwitchButtonProps } from './SwitchButton.props';
import styles from './SwitchButton.module.css';
import cn from 'classnames';


export const SwitchButton = ({ text, isActive, onClick }: SwitchButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.userTypeBtn, {
			[styles.active]: isActive,
		})} onClick={onClick}>
			{text}
		</button>
	);
};