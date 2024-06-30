import axios from 'axios';
import React from 'react'
import LoginGitHub from 'react-login-github';

const GithubLogin = () => {
    const onSuccess = async (response) => {
        try {

            const { data } = await axios.post('https://vtqv4s38-8000.inc1.devtunnels.ms/github/callback', {
                code: response.code,
            });
            
            console.log('Authenticated user:', data);
        } catch (error) {
            console.error('Error during authentication:', error);
            
        }
    };

    const onFailure = (error) => {
        console.error('GitHub authentication failed:', error);
        // Handle failure scenario
    };

    return (
        <>
            <LoginGitHub
                clientId="Ov23liUaH6DXYpQeOviF"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </>
    );
}

export default GithubLogin