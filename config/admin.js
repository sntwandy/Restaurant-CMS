module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec38a143b7a1f13305cd79ff5057720c'),
  },
});
