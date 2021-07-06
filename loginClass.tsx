import React from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';

export class Login extends React.Component {

    preLoginTracking(): void {
        console.log('Forsøk til å logge på Google');
    }

    errorHandler(error: string): void{
        console.error(error)
    }

    responseGoogle(googleBruker: gapi.auth2.GoogleUser): void {
        const id_token = googleBruker.getAuthResponse(true).id_token
        const googleId = googleBruker.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})
    }

    render(): JSX.Element {
        const clientConfig = { client_id: '851176987499-m2j310ndjiflbtfn055adveughuskrob.apps.googleusercontent.com' }

        return (
        <div>
                <GoogleLoginButton
                    responseHandler={this.responseGoogle}
                    clientConfig={clientConfig}
                    preLogin={this.preLoginTracking}
                    failureHandler={this.errorHandler}
                />
        </div>
        )
    }
}
export default Login;
