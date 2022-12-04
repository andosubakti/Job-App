import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { googleLogout } from '@react-oauth/google';

const ButtonLogout = () => {
    const router = useRouter()
    const isLoggedIn = Cookies.get('isLoggedIn') === 'true'
    const logOut = () => {
        Cookies.remove('isLoggedIn');
        Cookies.remove('token')
        googleLogout()
        router.push('/')
    }
    return (
        <button onClick={() => logOut()}>
            Log Out
        </button>
    );
}

export default ButtonLogout