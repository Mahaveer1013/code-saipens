import axios from 'axios';
import React from 'react'
import LoginGitHub from 'react-login-github';

const GithubLogin = () => {
    const onSuccess = async (response) => {
        try {

            const { data } = await axios.post('http://localhost:5000/auth/github/callback', {
                code: response.code,
            });
            
            console.log('Authenticated user:', data);
        } catch (error) {
            console.error('Error during authentication:', error);
            // Handle error scenario
        }
    };

    const onFailure = (error) => {
        console.error('GitHub authentication failed:', error);
        // Handle failure scenario
    };

    return (
        <div>
            <h2>Login with GitHub</h2>
            <LoginGitHub
                clientId="Ov23liUaH6DXYpQeOviF"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
}

export default GithubLogin