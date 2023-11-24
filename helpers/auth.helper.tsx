import { ToastError, ToastSuccess } from "components/Toast/Toast";
import { CheckAuthInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios from "axios";


export function loginUser(email: string, password: string, router: any, setLoading: (e: any) => void) {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);

        localStorage.setItem('logged_in', 'true');
        localStorage.setItem('username', 'separatrix');
        localStorage.setItem('email', email);
        router.push('/profile');
        ToastSuccess(setLocale(router.locale).cool + '!');
    }, 1000);
}

export async function registerUser(email: string, password: string, username: string, userType: 'guest' | 'owner', router: any, setLoading: (e: any) => void) {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);

        localStorage.setItem('logged_in', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('userType', userType);

        router.push('/profile');
        ToastSuccess(setLocale(router.locale).cool + '!');
    }, 1000);
}