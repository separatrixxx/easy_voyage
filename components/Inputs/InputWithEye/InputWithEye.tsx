import { InputWithEyeProps } from './InputWithEye.props';
import styles from './InputWithEye.module.css';
import Eye from './eye.svg';
import EyeClose from './eye_close.svg';
import { useState } from 'react';


export const InputWithEye = ({ children, onMouseEnter, onMouseLeave }: InputWithEyeProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <label className={styles.label}>
            <span className={styles.icon}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}>
                {isOpen ? <Eye /> : <EyeClose /> }
            </span>
            {children}
        </label>
    );
};