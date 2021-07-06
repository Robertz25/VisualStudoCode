import React from 'react'
import {GoogleLogout} from 'react-google-login'

const clientId = '851176987499-m2j310ndjiflbtfn055adveughuskrob.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully'); 
        console.log(onSuccess);
    };
    
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}>
                </GoogleLogout>
        </div>
    );
}

export default Logout;
