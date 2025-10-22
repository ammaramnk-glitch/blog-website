export default ({ env }) => ({
  auth: {
    // Old: expiresIn: '30d',
    sessions: {
      maxSessionLifespan: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
      maxRefreshTokenLifespan: 60 * 24 * 60 * 60 * 1000, // 60 days in ms
    },
    secret: env('ADMIN_JWT_SECRET', 'defaultAdminJwtSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

