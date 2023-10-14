import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	email: string,
	username: string,
	image: string,
}