export function indexPageHelper(router: any, setIsAuth: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');

	if (loggedIn) {
		setIsAuth(true);
		router.push('/home');
	} else {
		setIsAuth(false);
	}
}

export function pageHelper(router: any, setIsAuth: (e: any) => void, setUsername: (e: any) => void, setEmail: (e: any) => void, setUserType: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');
	const username = localStorage.getItem('username');
	const email = localStorage.getItem('email');
	const userType = localStorage.getItem('userType');

	if (loggedIn) {
		setIsAuth(true);
		setUsername(username);
		setEmail(email);
		setUserType(userType);
	} else {
		setIsAuth(false);
		router.push('/');
	}
}