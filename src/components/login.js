import { GoogleLogin } from "react-google-login";

const clientId =
  "12904015850-u8410mems1qo8o35ovb4m351clu0rhi3.apps.googleusercontent.com";

const onSuccess = (res) => {
  console.log("LOGIN SUCCESS ", res.profileObj);
};

const onFailure = (res) => {
  console.log("LOGIN FAIL ", res);
};

function Login() {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
