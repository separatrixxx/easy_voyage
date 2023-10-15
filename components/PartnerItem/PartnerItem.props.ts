import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PartnerItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string,
	address: string,
	image: string,
}