module.exports = [
  // Error handler middleware
  'strapi::errors',

  // Session middleware (fixes "secure cookie" issue)
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',     // Cookie name
      secure: false,          // ✅ Disable secure flag for Render / HTTP internal
      sameSite: 'lax',        // Prevent CSRF issues
      httpOnly: true,         // Only accessible via server
    },
  },

  // Security headers
  'strapi::security',

  // CORS
  'strapi::cors',

  // Adds X-Powered-By header
  'strapi::poweredBy',

  // Logger middleware
  'strapi::logger',

  // Query parser
  'strapi::query',

  // Body parser
  'strapi::body',

  // Favicon
  'strapi::favicon',

  // Serve public files
  'strapi::public',
];
