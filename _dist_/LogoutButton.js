import React from "../_snowpack/pkg/react.js";
import {useAuth0} from "../_snowpack/pkg/@auth0/auth0-react.js";
export const LogoutButton = () => {
  const {logout} = useAuth0();
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => logout({returnTo: window.location.href})
  }, "Log Out");
};
