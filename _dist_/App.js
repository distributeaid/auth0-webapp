import React, {useState} from "../_snowpack/pkg/react.js";
import {LoginButton} from "./LoginButton.js";
import {useAuth0} from "../_snowpack/pkg/@auth0/auth0-react.js";
import {LogoutButton} from "./LogoutButton.js";
export const App = () => {
  const {user, isAuthenticated, getIdTokenClaims} = useAuth0();
  const [idToken, setIdToken] = useState();
  if (isAuthenticated) {
    getIdTokenClaims().then(setIdToken);
  }
  return /* @__PURE__ */ React.createElement("main", null, isAuthenticated ? /* @__PURE__ */ React.createElement(LogoutButton, null) : /* @__PURE__ */ React.createElement(LoginButton, null), isAuthenticated && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: user.picture,
    alt: user.name
  }), /* @__PURE__ */ React.createElement("h2", null, user.name), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(user, null, 2)), idToken && /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(idToken, null, 2)))));
};
