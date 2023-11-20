import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UserInterface } from "interfaces/user.interface";


export interface ProfilePageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	user: UserInterface,
	type: 'guest' | 'owner',
}