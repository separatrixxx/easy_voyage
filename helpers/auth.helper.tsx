import { ToastSuccess } from "components/Toast/Toast";
import { CheckAuthInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import axios from "axios";


export function loginUser(authData: Array<string>, router: any) {
    ToastSuccess(setLocale(router.locale).cool + '!');
}

export async function registerUser(authData: Array<string>, router: any) {
    ToastSuccess(setLocale(router.locale).cool + '!');
}