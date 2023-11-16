import { ToastError } from "components//Toast/Toast";
import { CheckAuthInterface } from "interfaces/check_auth.interface";
import { setLocale } from "./locale.helper";
import { loginUser, registerUser } from "./auth.helper";


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function checkLogin(email: string, password: string, router: any, setError: (e: any) => void, setLoading: (e: any) => void) {
    const checkLogin: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
        errUsername: false,
        errOrganizationName: false,
    };

    if (EMAIL_REGEXP.test(email) && password.length >= 8) {
        loginUser(email, password, router, setLoading);
    } else {
        if (!EMAIL_REGEXP.test(email)) {
            checkLogin.errEmail = true;
            { ToastError(setLocale(router.locale).error_email); }
        }
        if (password.length < 8) {
            checkLogin.errPassword = true;
            { ToastError(setLocale(router.locale).error_password); }
        }
    }

    setError(checkLogin);
}

export function checkRegistration(email: string, password: string, username: string, organizationName: string, userType: 'guest' | 'owner',
    router: any, setError: (e: any) => void, setLoading: (e: any) => void) {
    const checkRegister: CheckAuthInterface = {
        errEmail: false,
        errPassword: false,
        errUsername: false,
        errOrganizationName: false,
    };

    if (EMAIL_REGEXP.test(email) && password.length >= 8 && +username !== 0) {
        if (userType === 'owner' && +organizationName === 0) {
            checkRegister.errOrganizationName = true;
            ToastError(setLocale(router.locale).error_organization_name);
        } else {
            registerUser(email, password, router, setLoading)
        }
    } else {
        if (!EMAIL_REGEXP.test(email)) {
            checkRegister.errEmail = true;
            { ToastError(setLocale(router.locale).error_email); }
        }
        if (password.length < 8) {
            checkRegister.errPassword = true;
            { ToastError(setLocale(router.locale).error_password); }
        }
        if (+username === 0) {
            checkRegister.errUsername = true;
            { ToastError(setLocale(router.locale).error_name); }
        }
    }

    setError(checkRegister);
}
