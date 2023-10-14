import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SideBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	side: 'left' | 'right',
    image: string,
    title1: string,
    title2: string,
    text: string,
    btnText: string,
}