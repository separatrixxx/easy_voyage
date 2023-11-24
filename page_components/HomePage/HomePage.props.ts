import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UserInterface } from "interfaces/user.interface";


export interface HomePageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'guest' | 'owner',
}