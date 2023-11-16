import { ToastError, ToastSuccess } from "components/Toast/Toast";
import { CheckAuthInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios from "axios";


export function loginUser(email: string, password: string, router: any, setLoading: (e: any) => void) {
    ToastSuccess(setLocale(router.locale).cool + '!');
}

export async function registerUser(email: string, password: string, router: any, setLoading: (e: any) => void) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/register', {

    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).cool + '!');
            localStorage.setItem('logged_in', 'true');
            router.push('/content');
        })
        .catch(function (error) {
            console.log("Registration error: " + error);
            ToastError(error);
        });
}