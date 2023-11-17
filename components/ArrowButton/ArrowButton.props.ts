import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ArrowButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode,
	link?: string,
	setActive?: (e: any) => void,
}