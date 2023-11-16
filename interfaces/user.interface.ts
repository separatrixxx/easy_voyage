export interface UserInterface {
	id: number,
	username: string,
	email: string,
	image: string,
	type: 'guest' | 'owner',
	organizationName?: string,
	age: number,
	registrationTime: string,
}
