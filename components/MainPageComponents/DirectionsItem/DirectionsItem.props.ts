import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DirectionsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string,
    title: string,
    text: string,
}