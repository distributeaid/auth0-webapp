import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {App} from "./App.js";
import {Auth0Provider} from "../_snowpack/pkg/@auth0/auth0-react.js";
const root = document.getElementById("root");
if (root) {
  ReactDOM.render(/* @__PURE__ */ React.createElement(Auth0Provider, {
    domain: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_AUTH0_DOMAIN,
    clientId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_AUTH0_CLIENT_ID,
    redirectUri: window.location.href
  }, /* @__PURE__ */ React.createElement(App, null)), root);
}
