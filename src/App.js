import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const clientId =
  "12904015850-u8410mems1qo8o35ovb4m351clu0rhi3.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
// id -12904015850-u8410mems1qo8o35ovb4m351clu0rhi3.apps.googleusercontent.com
// secrect - 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
// npm install gapi-script react-google-login
