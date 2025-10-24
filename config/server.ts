export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('HOST_URL', 'https://blog-website-1-to2c.onrender.com/admin'),
  app: {
    keys: env.array('APP_KEYS'),
  },
   proxy: true, // <-- critical for Strapi v4 behind reverse proxy
  
});