import React from 'react';
import { signInWithTwitter } from 'utils/loginUtils';

const LoginButton = () => {

    return (
        <button className='btn btn-ghost' onClick={signInWithTwitter}>Sign in</button>
    );
};

export default LoginButton;