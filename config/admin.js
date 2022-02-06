module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '52f470e8d2d609a3e156468072dde48b'),
  },
});
