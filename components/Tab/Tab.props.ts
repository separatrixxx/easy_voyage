import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	text: string,
	flag: boolean,
	setFlag: (e: any) => void,
}