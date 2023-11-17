import { ReactNode } from 'react';

export interface ChangeAuthTypeProps {
	type: 'login' | 'register',
	setType: (e: any) => void,
}