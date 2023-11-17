import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SwitchButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text: string,
	isActive: boolean,
	onClick: (e: any) => void,
}