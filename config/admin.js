module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a67a31f99926b631196385e5b5e41899'),
  },
});
