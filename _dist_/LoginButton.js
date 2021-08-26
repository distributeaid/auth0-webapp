import React from "../_snowpack/pkg/react.js";
import {useAuth0} from "../_snowpack/pkg/@auth0/auth0-react.js";
export const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => loginWithRedirect()
  }, "Log In");
};
