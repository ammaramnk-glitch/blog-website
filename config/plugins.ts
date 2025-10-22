module.exports = ({ env }) => ({
  // Default plugin configurations
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'defaultJwtSecret'),
    },
  },
});
