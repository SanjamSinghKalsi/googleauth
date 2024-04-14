import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "12904015850-u8410mems1qo8o35ovb4m351clu0rhi3.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("LOG OUT SUCCESS");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
