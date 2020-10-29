process.env.SNOWPACK_PUBLIC_VERSION = process.env.VERSION ?? Date.now();

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    env: {
      SNOWPACK_PUBLIC_AUTH0_DOMAIN: true,
      SNOWPACK_PUBLIC_AUTH0_CLIENT_ID: true,
      SNOWPACK_PUBLIC_VERSION: true,
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '/auth0-webapp',
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
