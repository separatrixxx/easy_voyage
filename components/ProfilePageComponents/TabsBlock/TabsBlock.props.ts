import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TabsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'guest' | 'owner',
}