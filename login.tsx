import {GoogleLogin } from 'react-google-login';


 const responseGoogle = (response: any) => {
   console.log(response);
 };

function login() {
  return (
    <div className="App">
      <GoogleLogin
      clientId="851176987499-m2j310ndjiflbtfn055adveughuskrob.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
      />
    </div>
    
    
  );
}

export default login;
