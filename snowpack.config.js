/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
  // directory name: 'build directory'
   public: '/',
   src: '/dist',
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    buildOptions: {
      // put the build files in /docs
      out: 'docs',
      // put the meta snowpack build files under snowpack instead of _snowpack since Github special-cases underscore prefixed folders
      metaUrlPath: 'snowpack'
    }
  },
};
