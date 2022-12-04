import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginButton = () => {
    const router = useRouter()
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log('login Success res:', credentialResponse);
                Cookies.set('isLoggedIn', 'true');
                Cookies.set('token', credentialResponse.credential)
                router.push('/job-list')
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />
    );
}

export default LoginButton